// src/app/australia-assesment-report/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Australia Assessment Report – XIPHIAS Immigration",
  description:
    "Australia PR (Subclass 189 & 190) initial assessment report with ANZSCO code, points table and fee overview by XIPHIAS Immigration.",
  robots: { index: false, follow: false }, // internal tool only
};

const reportHtml = `
<table align="center" border="0" cellpadding="0" cellspacing="0" width="620" bgcolor="white" style="background-color:#E4E4E4;">
  <tbody style="background-color:#E4E4E4;">
    <tr style="background-color:#E4E4E4;">
      <td align="center" style="background-color:#E4E4E4;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="620" style="background-color:#002868;">
          <tbody>
            <tr>
              <td align="left">
                <img
                  alt="xiphias-logo"
                  src="https://xiphiasimmigration.com/images/logo/xiphias-immigration-white.png"
                  width="98"
                  border="0"
                  hspace="0"
                  vspace="0"
                  style="vertical-align:top;padding-top:20px;padding-left:20px;"
                />
              </td>
            </tr>
          </tbody>

          <!-- header text -->
          <tbody>
            <tr>
              <td>
                <p style="color:#F3AA3A;font-family:Roboto,Arial,sans-serif;font-size:24px;text-align:left;padding:20px 0 10px 20px;letter-spacing:0.5px;">
                  <strong>CONGRATULATIONS Enter Name,</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="color:#ffffff;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 0 20px 20px;letter-spacing:0.5px;">
                  Greetings from XIPHIAS Immigration!
                </p>
              </td>
            </tr>
          </tbody>

          <!-- intro -->
          <tbody style="background-color:#ffffff;">
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:20px 20px 0 20px;letter-spacing:0.5px;line-height:24px;text-align:justify;">
                  Based on the information communicated and submitted by you, our government-authorized immigration consultancy has conducted an initial immigration assessment. We are delighted to inform you that you are eligible for Australia PR under Subclass 189 and 190 for Australia. The minimum eligibility for Australian Skilled Immigration Visa is 65 points.
                </p>
              </td>
            </tr>
          </tbody>

          <!-- ANZSCO card -->
          <tbody>
            <tr>
              <td align="left">
                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;margin:20px;background-color:#ffffff;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td align="center" valign="top" style="padding-top:10px;padding-bottom:10px;">
                              <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                                <tr>
                                  <td align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" border="0" width="580" style="border-collapse:collapse;background-image:linear-gradient(to bottom right,#002868,#4172c2);border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                                      <tbody>
                                        <tr>
                                          <td align="left" valign="top" style="padding:10px;">
                                            <p style="margin:0;padding:0 0 8px 0;letter-spacing:0.5px;line-height:26px;color:#ffffff;font-size:16px;text-align:center;">
                                              <strong>Your ANZSCO code is - 261313</strong>
                                            </p>
                                            <p style="margin:0;padding:0 0 4px 0;letter-spacing:0.5px;line-height:24px;color:#ffffff;font-size:15px;text-align:center;">
                                              <strong>Software Engineer</strong>
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>

          <!-- investment paragraph -->
          <tbody style="background-color:#ffffff;">
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 20px 20px;letter-spacing:0.5px;line-height:24px;text-align:justify;">
                  Consider this your investment in a brighter future. With your consent, we are eager to provide you with personalized immigration consultation and representation services. Connect to our team immediately to enroll yourself in this program. Should you choose to partner with XIPHIAS Immigration for processing your Visa 189/190, you'll receive a finalized retainer agreement signed from XIPHIAS IMMIGRATION PVT. LTD.
                </p>
              </td>
            </tr>
          </tbody>

          <!-- points table -->
          <tbody style="background-color:#ffffff;">
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;margin:0 20px 20px 20px;font-family:Roboto,Arial,sans-serif;font-size:13px;color:#333333;">
                  <tbody>
                    <tr>
                      <td colspan="4" style="padding:8px 10px;background-color:#002868;color:#ffffff;font-weight:bold;text-align:center;">
                        Points Summary
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color:#f1f5fb;padding:6px 8px;font-weight:bold;border-bottom:1px solid #e2e8f0;">Particulars</td>
                      <td style="background-color:#f1f5fb;padding:6px 8px;font-weight:bold;border-bottom:1px solid #e2e8f0;">Shared Information by the client</td>
                      <td style="background-color:#f1f5fb;padding:6px 8px;font-weight:bold;border-bottom:1px solid #e2e8f0;text-align:right;">Maximum Points</td>
                      <td style="background-color:#f1f5fb;padding:6px 8px;font-weight:bold;border-bottom:1px solid #e2e8f0;text-align:right;">Your Points</td>
                    </tr>

                    <tr>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Age/DOB</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Age (33-39 years)</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">30</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">25</td>
                    </tr>

                    <tr>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">English Language Ability [IELTS/PTE/TOEFL]</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">PTE Academic 90 (Superior)</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">IELTS 8.0 or PTE Academic 79</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">20</td>
                    </tr>

                    <tr>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Qualifications</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Bachelor / Master</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">20 (if doctorate)</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">15</td>
                    </tr>

                    <tr>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Work Experience (Overseas Work Experience)</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">&lt;3 years</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">15</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">0</td>
                    </tr>

                    <tr>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Partner Skills / Single Applicant</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Single</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">10</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">10</td>
                    </tr>

                    <tr>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Australian Qualification</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Master's</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">5</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">5</td>
                    </tr>

                    <tr>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Australia Qualification in Regional Area</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">NA</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">5</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">0</td>
                    </tr>

                    <tr>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Australian Employment</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">3+ years</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">20</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">10</td>
                    </tr>

                    <tr>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">State Sponsorship</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">Applicable for State-Sponsored Visa</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">5</td>
                      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;">5</td>
                    </tr>

                    <tr>
                      <td colspan="3" style="padding:6px 8px;font-weight:bold;border-top:1px solid #e2e8f0;">Your Total Points</td>
                      <td style="padding:6px 8px;font-weight:bold;border-top:1px solid #e2e8f0;text-align:right;">90</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 10px 20px;letter-spacing:0.5px;line-height:24px;">
                  <strong>Terms &amp; Conditions :-</strong>
                </p>
              </td>
            </tr>
          </tbody>

          <!-- services + STEP cards -->
          <tbody style="background-color:#ffffff;">
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 10px 20px;letter-spacing:0.5px;line-height:24px;">
                  We will provide the following services for the visa applicant(s):
                </p>
                <ul style="padding:0 10px 10px 40px;text-align:left;letter-spacing:0.5px;line-height:26px;color:#333333;font-size:15px;list-style-type:disc;">
                  <li>Complete guidance on the skills assessment and state sponsorship for the main applicant if applicable.</li>
                  <li>Completion of all visa application forms and checking of all supporting evidence as required for the visa application.</li>
                  <li>Visa application lodgement and application status tracking with regular communication with the applicant(s).</li>
                  <li>Advice about health checks and no criminal record arrangements advice if required.</li>
                  <li>FREE advice about education, family settlement, and job seeking in the country.</li>
                </ul>
              </td>
            </tr>

            <!-- 6000 AUD heading -->
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px;letter-spacing:0.5px;line-height:22px;">
                  <strong>Immigration Consultation and representation service:</strong>
                </p>
                <p style="color:#000000;font-family:Roboto,Arial,sans-serif;font-size:16px;text-align:center;padding:4px 20px 16px 20px;letter-spacing:0.5px;line-height:24px;font-weight:bold;">
                  6000 AUD + TAX
                </p>
              </td>
            </tr>

            <!-- STEP 1 card -->
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;margin:0 20px 20px 20px;">
                  <tbody>
                    <tr>
                      <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" width="580" style="border-collapse:collapse;background-image:linear-gradient(to bottom right,#002868,#4172c2);border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                          <tbody>
                            <tr>
                              <td style="padding:0;">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                  <tbody>
                                    <tr>
                                      <td style="background-color:#F3AA3A;padding:8px 10px;text-align:center;font-weight:bold;color:#000000;letter-spacing:0.5px;font-size:14px;">
                                        STEP 1
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding:18px 24px 8px 24px;text-align:center;color:#ffffff;font-size:14px;line-height:22px;letter-spacing:0.3px;border-top:1px solid #ffffff40;">
                                        1st Installment = 2000 AUD + Tax &gt; Immediate
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding:10px 24px 18px 24px;text-align:center;color:#ffffff;font-size:12px;line-height:18px;letter-spacing:0.3px;border-top:1px solid #ffffff40;">
                                        Note: Skill Assessment Fee may vary as per the Assessment bodies.
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <!-- STEP 2 card -->
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;margin:0 20px 20px 20px;">
                  <tbody>
                    <tr>
                      <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" width="580" style="border-collapse:collapse;background-image:linear-gradient(to bottom right,#002868,#4172c2);border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                          <tbody>
                            <tr>
                              <td style="padding:0;">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                  <tbody>
                                    <tr>
                                      <td style="background-color:#F3AA3A;padding:8px 10px;text-align:center;font-weight:bold;color:#000000;letter-spacing:0.5px;font-size:14px;">
                                        STEP 2
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding:18px 24px 8px 24px;text-align:center;color:#ffffff;font-size:14px;line-height:22px;letter-spacing:0.3px;border-top:1px solid #ffffff40;">
                                        AUD $ 500 - AUD $ 3000 in the form of credit card = Assessment Authority Fees paid to Govt of Australia for initial approval by authority.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding:10px 24px 18px 24px;text-align:center;color:#ffffff;font-size:12px;line-height:18px;letter-spacing:0.3px;border-top:1px solid #ffffff40;">
                                        Note: Skill Assessment Fee may vary as per the Assessment bodies.
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <!-- STEP 3 card -->
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;margin:0 20px 20px 20px;">
                  <tbody>
                    <tr>
                      <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" width="580" style="border-collapse:collapse;background-image:linear-gradient(to bottom right,#002868,#4172c2);border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                          <tbody>
                            <tr>
                              <td style="padding:0;">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                  <tbody>
                                    <tr>
                                      <td style="background-color:#F3AA3A;padding:8px 10px;text-align:center;font-weight:bold;color:#000000;letter-spacing:0.5px;font-size:14px;">
                                        STEP 3
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding:18px 24px 18px 24px;text-align:center;color:#ffffff;font-size:14px;line-height:22px;letter-spacing:0.3px;border-top:1px solid #ffffff40;">
                                        2000 AUD + Tax with EOI - Expression of Interest filing.
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <!-- STEP 4 card -->
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;margin:0 20px 20px 20px;">
                  <tbody>
                    <tr>
                      <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" width="580" style="border-collapse:collapse;background-image:linear-gradient(to bottom right,#002868,#4172c2);border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                          <tbody>
                            <tr>
                              <td style="padding:0;">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                  <tbody>
                                    <tr>
                                      <td style="background-color:#F3AA3A;padding:8px 10px;text-align:center;font-weight:bold;color:#000000;letter-spacing:0.5px;font-size:14px;">
                                        STEP 4
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding:18px 24px 18px 24px;text-align:center;color:#ffffff;font-size:14px;line-height:22px;letter-spacing:0.3px;border-top:1px solid #ffffff40;">
                                        2000 AUD + Tax after receiving the invitation (ITA).
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <!-- govt fees -->
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 6px 20px;letter-spacing:0.5px;line-height:22px;">
                  <strong>Government Visa Application Fees (approx.):</strong>
                </p>
                <ul style="padding:0 10px 10px 40px;text-align:left;letter-spacing:0.5px;line-height:24px;color:#333333;font-size:15px;list-style-type:disc;">
                  <li>Primary applicant fee: AUD $ 4910</li>
                  <li>Dependent applicant fee if applicable (spouse): AUD $ 2455</li>
                  <li>Additional applicant charge for each additional adult that is 18 years or under: AUD $ 1230</li>
                </ul>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:14px;text-align:left;padding:0 20px 10px 20px;letter-spacing:0.5px;line-height:22px;">
                  After acceptance of EOI &mdash; proceed to payment.
                </p>
                <p style="color:#555555;font-family:Roboto,Arial,sans-serif;font-size:13px;text-align:left;padding:0 20px 16px 20px;letter-spacing:0.5px;line-height:20px;">
                  <strong>NOTE:</strong> The fees do not include any flight ticket charges and post immigration charges.
                </p>
              </td>
            </tr>
          </tbody>

          <!-- summary / bullets -->
          <tbody style="background-color:#ffffff;">
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 10px 20px;letter-spacing:0.5px;line-height:24px;">
                  <strong>Summary overview of Immigration process as per all retainer agreement(s)</strong>
                </p>
                <ul style="padding:0 10px 10px 40px;text-align:left;letter-spacing:0.5px;line-height:26px;color:#333333;font-size:15px;list-style-type:disc;">
                  <li>Assist with Skill assessment completion.</li>
                  <li>Assist with the Medical Examination process to be completed in advance.</li>
                  <li>Assist to gather all required documents and filing applications when "Invitation to apply" is received.</li>
                  <li>Provide regular updates to you until the decision is made by the government of Australia.</li>
                </ul>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 10px 20px;letter-spacing:0.5px;line-height:24px;">
                  Once we receive proof of payment for Process 1 and signed a copy of the retainer agreement(s) we will assign a coordinator. They will work closely on your profile and provide you with ongoing support and get answers to all your immigration-related questions.
                </p>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 10px 20px;letter-spacing:0.5px;line-height:24px;">
                  We closely work with our offices, associates, and partners to provide guidance/referral to cover pre-departure and post-landing activities along with job search assistance.
                </p>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 10px 20px;letter-spacing:0.5px;line-height:24px;">
                  Please visit our website to know more about our company and services.
                </p>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 20px 20px;letter-spacing:0.5px;line-height:24px;">
                  Please feel free to contact us regarding any query related to this email or assessment.
                </p>
              </td>
            </tr>
          </tbody>

          <!-- footer with social icons (same layout as Canada) -->
          <tbody>
            <tr>
              <td>
                <table align="center" width="620" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:620px;margin-top:10px;margin-bottom:20px;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#F3AA3A;">
                          <tbody>
                            <tr>
                              <!-- Left: contact -->
                              <td style="width:40%;padding:10px;color:#000000;font-family:Roboto,Arial,sans-serif;font-size:15px;vertical-align:top;">
                                <h3 style="padding-bottom:10px;margin:0;">Contact Us:</h3>
                                <p style="padding-bottom:5px;margin:0;">
                                  <strong>Email:</strong> immigration@xiphias.in
                                </p>
                                <p style="margin:0;">
                                  <strong>Phone:</strong>
                                  <a href="tel:+91-9019 400 500" style="text-decoration:none;color:#000000;">
                                    +91-9019 400 500
                                  </a>
                                </p>
                              </td>

                              <!-- Right: socials + apps -->
                              <td style="width:60%;padding:10px;color:#000000;font-family:Roboto,Arial,sans-serif;font-size:16px;text-align:center;vertical-align:top;">
                                <h3 style="padding-bottom:10px;margin:0;">Follow Us:</h3>

                                <!-- social icons row -->
                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;">
                                  <tbody>
                                    <tr>
                                      <td style="padding:0 5px;">
                                        <a href="https://www.facebook.com/xiphiasimmigration" target="_blank" style="text-decoration:none;">
                                          <img src="/images/footer/social/facebook.svg" width="18" height="18" style="display:block;border:0;" alt="Facebook" />
                                        </a>
                                      </td>
                                      <td style="padding:0 5px;">
                                        <a href="https://twitter.com/XiphiasInfo" target="_blank" style="text-decoration:none;">
                                          <img src="/images/footer/social/x.svg" width="18" height="18" style="display:block;border:0;" alt="Twitter" />
                                        </a>
                                      </td>
                                      <td style="padding:0 5px;">
                                        <a href="https://www.linkedin.com/company/xiphias-immigration-pvt-limited?trk=prof-following-company-logo" target="_blank" style="text-decoration:none;">
                                          <img src="/images/footer/social/linkedin.svg" width="18" height="18" style="display:block;border:0;" alt="LinkedIn" />
                                        </a>
                                      </td>
                                      <td style="padding:0 5px;">
                                        <a href="https://www.instagram.com/xiphias.immigration/" target="_blank" style="text-decoration:none;">
                                          <img src="/images/footer/social/instagram.svg" width="18" height="18" style="display:block;border:0;" alt="Instagram" />
                                        </a>
                                      </td>
                                      <td style="padding:0 5px;">
                                        <a href="https://www.youtube.com/@immigrationxiphias5228" target="_blank" style="text-decoration:none;">
                                          <img src="/images/footer/social/youtube.svg" width="18" height="18" style="display:block;border:0;" alt="YouTube" />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <!-- app badges row -->
                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:8px;margin-left:auto;margin-right:auto;">
                                  <tbody>
                                    <tr>
                                      <td style="padding:0 8px;">
                                        <a href="https://play.google.com/store/apps/details?id=com.xiphiasimmigration.app.android" target="_blank" style="text-decoration:none;">
                                          <img src="/images/footer/playstore.65459def.svg" width="25" style="display:block;border:0;" alt="Android App" />
                                        </a>
                                      </td>
                                      <td style="padding:0 8px;">
                                        <a href="https://itunes.apple.com/in/app/xiphias-immigration/id1376016286?mt=8" target="_blank" style="text-decoration:none;">
                                          <img src="/images/footer/appstore.svg" width="25" style="display:block;border:0;" alt="Apple App" />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>

        </table>
      </td>
    </tr>
  </tbody>
</table>
`;

export default function AustraliaAssessmentReportPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: "24px 8px",
        backgroundColor: "#E4E4E4",
      }}
    >
      <div
        style={{ maxWidth: "640px", margin: "0 auto" }}
        dangerouslySetInnerHTML={{ __html: reportHtml }}
      />
    </main>
  );
}