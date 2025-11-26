// /api/submit-kyc.js
import { supabase } from '../../lib/supabase'; // We'll set this up next

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { 
      firstName, 
      lastName, 
      dob, 
      email, 
      address, 
      ssn, 
      sumsubApplicantId, 
      sumsubStatus 
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !sumsubApplicantId || !ssn) {
      return res.status(400).json({ 
        message: 'Missing required fields' 
      });
    }

    // Insert into database
    const { data, error } = await supabase
      .from('applicants')
      .insert([
        { 
          first_name: firstName,
          last_name: lastName,
          dob,
          email,
          address,
          ssn, // In production, you'd encrypt this
          sumsub_applicant_id: sumsubApplicantId,
          sumsub_status: sumsubStatus || 'pending',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ 
        message: 'Failed to save application' 
      });
    }

    // Send welcome email (optional)
    await fetch(process.env.EMAIL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: email,
        subject: 'Your Earnly Application - Received!',
        html: `<p>Hi ${firstName},</p>
               <p>Thank you for applying to join Earnly! We've received your application and will review it within 2-3 business days.</p>
               <p>Verification ID: ${sumsubApplicantId}</p>
               <p>Best regards,<br>The Earnly Team</p>`
      })
    }).catch(console.error);

    return res.status(200).json({ 
      success: true,
      applicantId: data[0].id 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      message: 'Internal server error' 
    });
  }
}