// src/app/canada-assesent-report/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canada Assessment Report – XIPHIAS Immigration",
  description:
    "Canada Express Entry initial assessment report with eligibility, NOC details, settlement funds and fee overview by XIPHIAS Immigration.",
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

          <tbody>
            <tr>
              <td>
                <p style="color:#F3AA3A;font-family:Roboto,Arial,sans-serif;font-size:24px;text-align:left;padding:20px 0 20px 20px;letter-spacing:0.5px;">
                  <strong>Dear Enter Name,Congratulations !</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="color:#ffffff;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 0 10px 20px;letter-spacing:0.5px;">
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
                  After the successful launch of the Express Entry Stream in January 2015, anticipation around this stream has surged as it promises to finalize PR applications within six months after ITA and final application submission. The Canadian Government launched the Express Entry Stream to handle Federal Skilled Worker applications and several other economic class applications.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:18px;text-align:left;padding:20px 0 10px 20px;letter-spacing:0.5px;font-weight:620;">
                  How the Express Entry Process Works
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px;letter-spacing:0.5px;text-align:justify;line-height:24px;">
                  Candidates with extraordinary skills, placed in the Express Entry pool, can significantly benefit from this stream as it provides them access to Canada’s Job Bank and even become permanent residents of Canada. The Government of Canada has lifted all fees previously associated with employer eligibility checks for job offers. Therefore, the candidates can pursue employment opportunities with no financial barriers.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:20px;letter-spacing:0.5px;line-height:24px;text-align:justify;">
                  Based on the information that you have provided, our government-authorized Immigration Consultancy has conducted an initial immigration assessment. Considering the criteria stated below, we are pleased to inform you that you are eligible for the above Express Entry Process (Placement in Pool and Job Bank using the Federal Skilled Worker Category).
                </p>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:17px;text-align:left;padding:20px 20px 0 20px;letter-spacing:0.5px;line-height:24px;text-align:justify;">
                  <strong>Documentary proof* of Work Experience:</strong>
                </p>
              </td>
            </tr>
          </tbody>

          <!-- NOC card -->
          <tbody>
            <tr>
              <td align="left">
                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;margin:20px;background-color:#ffffff;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td align="center" valign="top" style="padding-top:10px;padding-bottom:40px;">
                              <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                                <tr>
                                  <td align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" border="0" width="580" style="border-collapse:collapse;background-image:linear-gradient(to bottom right,#002868,#4172c2);border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                                      <tr>
                                        <td align="left" valign="top" style="padding:8px;">
                                          <p style="padding:10px 40px;border:1px solid #eeeeee;text-align:center;background-color:#F3AA3A;letter-spacing:0.5px;line-height:26px;text-transform:uppercase;font-weight:600;">
                                            Your profession NOC Codes
                                          </p>
                                          <p style="padding:10px 40px;text-align:center;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#ffffff;border-bottom:1px solid #ffffff;">
                                            <strong style="font-size:20px;">60010, 11201</strong>
                                          </p>
                                          <p style="padding:10px 40px;text-align:center;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#ffffff;">
                                            Corporate Sales Managers, Business Management Consultant
                                          </p>
                                          <p style="padding:10px 40px;text-align:center;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#ffffff;">
                                            <a href="https://noc.esdc.gc.ca/" target="_blank" style="text-decoration:underline;color:#ff9900;">
                                              Click to input NOC code for detailed requirements
                                            </a>
                                          </p>
                                        </td>
                                      </tr>
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

          <!-- explanation / language / funds -->
          <tbody style="background-color:#ffffff;">
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px;letter-spacing:0.5px;text-align:justify;line-height:24px;">
                  At least 50% to 60% of the tasks you performed at each of your previous job roles must align perfectly with the outlined links for the respective National Occupational Classification (NOC). If there are any discrepancies in NOC, this could be your final chance to rectify them. So, you must collaborate with your coordinator to determine the accurate NOC for your work experience. While future job NOCs can be updated without additional charges, any changes to previous or current experience NOCs may incur additional fees. Your understanding of these requirements is crucial for successfully processing your visa application.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:10px 20px 0 20px;letter-spacing:0.5px;line-height:24px;text-align:justify;">
                  Education credential assessment (ECA-WES) from the Government of Canada designated organization applicant and spouse (if applicable).<br />
                  The spouse should also complete ECA to earn a higher ranking in Express Entry.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:10px 20px 20px 20px;letter-spacing:0.5px;line-height:24px;text-align:justify;">
                  Language Test Score: One of the possible IELTS Generic Test combinations for the Main Applicant to earn 24 points listed on this assessment: Speaking: 7 Reading: 7 Writing: 7 Listening: 8 . The Higher Score you get better your CRS. Spouse (if applicable) will require 3.5 in reading, 4 in writing, 4.5 in listening and 4 in speaking on the IELTS Generic Test in order to get 5 points for adaptability. After combining all other points if 67 points are achieved comfortably, then there is no requirement for a spouse to write IELTS but in that case ranking score may go a little low.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="color:#ffffff;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:center;padding:20px 20px;letter-spacing:0.5px;line-height:24px;background-image:linear-gradient(to bottom right,#002868,#4172c2);">
                  Total settlement funds to show for 2 family member Total CAD 19,001
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:10px 20px 0 20px;letter-spacing:0.5px;line-height:24px;text-align:justify;">
                  Expected Qualifying and Express Entry Comprehensive Ranking Score chart:
                </p>
              </td>
            </tr>

            <!-- score tables -->
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;margin:10px 20px 20px 20px; color:#000;">
                  <tbody>
                    <tr>
                      <!-- Skilled worker table -->
                      <td valign="top" style="width:50%;padding-right:10px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;font-family:Roboto,Arial,sans-serif;">
                          <tbody>
                            <tr>
                              <td colspan="2" style="background-color:#002868;color:#ffffff;text-align:center;padding:8px 6px;font-size:14px;font-weight:bold;">
                                Skilled worker (67 points to pass)
                              </td>
                            </tr>
                            <tr>
                              <td style="background-color:#f1f5fb;padding:6px 8px;font-size:13px;font-weight:bold;border-bottom:1px solid #222222;">
                                Selection Factor
                              </td>
                              <td style="background-color:#f1f5fb;padding:6px 8px;font-size:13px;font-weight:bold;border-bottom:1px solid #222222;text-align:right;">
                                Points
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Age</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">12</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Education level</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">22</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Experience</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">15</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">First language</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">24</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Second language</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">0</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Adaptability</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">5</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Employment job offer</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">0</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;font-weight:bold;border-top:1px solid #222222;">Total:</td>
                              <td style="padding:6px 8px;font-size:13px;font-weight:bold;border-top:1px solid #222222;text-align:right;">78</td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding:6px 8px;font-size:13px;font-weight:bold;color:#166534;text-align:right;">
                                Qualified
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>

                      <!-- Express Entry table -->
                      <td valign="top" style="width:50%;padding-left:10px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;font-family:Roboto,Arial,sans-serif;">
                          <tbody>
                            <tr>
                              <td colspan="2" style="background-color:#002868;color:#ffffff;text-align:center;padding:8px 6px;font-size:14px;font-weight:bold;">
                                Express Entry
                              </td>
                            </tr>
                            <tr>
                              <td style="background-color:#f1f5fb;padding:6px 8px;font-size:13px;font-weight:bold;border-bottom:1px solid #222222;">
                                Selection Factor
                              </td>
                              <td style="background-color:#f1f5fb;padding:6px 8px;font-size:13px;font-weight:bold;border-bottom:1px solid #222222;text-align:right;">
                                Points
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding:6px 8px;font-size:13px;font-weight:bold;background-color:#4a7cc9;color:#ffffff;">
                                Core Human Capital Maximum: 460 points
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Age</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">70</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Education</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">119</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">First language</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">116</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Second language</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">0</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Canadian work experience</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">0</td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding:6px 8px;font-size:13px;font-weight:bold;background-color:#4a7cc9;color:#ffffff;">
                                Core Human Capital (Spouse/Common-law Partner) Maximum: 40 points
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Education</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">10</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">First language</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">12</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Canadian work experience</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">0</td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding:6px 8px;font-size:13px;font-weight:bold;background-color:#4a7cc9;color:#ffffff;">
                                Skill Transferability combos Maximum: 100 points
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Education and language</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">50</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Education and Canadian work</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">0</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Foreign work and language</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">50</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Foreign work and Canadian work</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">0</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;font-weight:bold;border-top:1px solid #222222;">Total:</td>
                              <td style="padding:6px 8px;font-size:13px;font-weight:bold;border-top:1px solid #222222;text-align:right;">427</td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding:6px 8px;font-size:13px;font-weight:bold;background-color:#4a7cc9;color:#ffffff;">
                                Additional points (to a maximum of 600 points)
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Provincial nomination</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">0</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Study in Canada</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">0</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">Sibling in Canada</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">15</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;">French-language skills</td>
                              <td style="padding:6px 8px;font-size:13px;border-bottom:1px solid #222222;text-align:right;">0</td>
                            </tr>
                            <tr>
                              <td style="padding:6px 8px;font-size:13px;font-weight:bold;border-top:1px solid #222222;">Subtotal Additional points:</td>
                              <td style="padding:6px 8px;font-size:13px;font-weight:bold;border-top:1px solid #222222;text-align:right;">15</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:20px;letter-spacing:0.5px;line-height:24px;text-align:justify;">
                  Even though it's your discretion, many times when you try to create a legal profile on your own, even a small error can cause big implications in immigration, and if refused, it creates an issue even for applying to other countries. If you would like XIPHIAS to handle your Canadian immigration and related services, please do not create Express entry or other online profiles on your own. We will professionally evaluate, manage, and create your profile through our designated access with CIC. We won't be able to do so if you create your profiles on your own by mistake, because it will be rejected for duplication.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 10px 20px;letter-spacing:0.5px;line-height:24px;text-align:justify;">
                  There are three situations to get faster "ITA" to become a Permanent Resident in the fastest possible time frame:
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <ol style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 20px 40px;letter-spacing:0.5px;line-height:24px;text-align:justify;list-style-type:decimal;">
                  <li>Meet the CRS score cut-off of the Government.</li>
                  <li>Job offer through the government manager "Job Bank" ( You will get access ).</li>
                  <li>Nomination by a Province.</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td>
                <p style="color:#333333;font-family:Roboto,Arial,sans-serif;font-size:15px;text-align:left;padding:0 20px 20px 20px;letter-spacing:0.5px;line-height:24px;text-align:justify;">
                  Usually, Provincial Nomination programs have limitations of settlement and are independent with their own full consulting/govt fee. But we have designed special pricing and plan ( Process 1, 2, and 3 Optional ) for the fastest possible time frame to become PR. First, we start with federal possibility and then we try our best to explore provincial solutions for you in case of low CRS or no job offer.
                </p>
              </td>
            </tr>
          </tbody>

          <!-- process summary + fees -->
          <tbody style="background-color:#ffffff;">
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td align="center" valign="top">
                              <table cellpadding="0" cellspacing="0" border="0" width="580" style="border-collapse:collapse;background-image:linear-gradient(to bottom right,#002868,#4172c2);border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                                <tr>
                                  <td align="left" valign="top" style="padding:8px;">
                                    <p style="padding:10px 30px;border-bottom:1px solid #ffffff;text-align:left;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#ffffff;font-size:15px;">
                                      <strong style="color:#F3AA3A;">Process 1</strong> - Express Entry Process (Placement in Pool and Job bank using Federal Skilled Worker category).
                                    </p>
                                    <p style="padding:10px 30px;border-bottom:1px solid #ffffff;text-align:left;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#ffffff;font-size:15px;">
                                      <strong style="color:#F3AA3A;">Process 2</strong> - Final Permanent Resident Application and Representation to Government.
                                    </p>
                                    <p style="padding:10px 30px;border-bottom:1px solid #ffffff;text-align:left;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#ffffff;font-size:15px;">
                                      <strong style="color:#F3AA3A;">Process 3</strong> - (Optional) Provincial Nomination Program- Depending on your situation/eligibility, this process may or may not apply to you but be assured we will only charge you for this process only if it’s required for faster proceeding of your case.
                                    </p>
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

                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;margin-top:20px;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td align="center" valign="top" style="padding-top:50px;">
                              <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                                <tr>
                                  <td align="left" valign="top">
                                    <p style="padding:0 20px;text-align:left;font-weight:620;letter-spacing:0.5px;line-height:26px;color:#333333;font-size:18px;">
                                      Fee overview based on Process and Respective agreements
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left" valign="top">
                                    <p style="padding:10px 20px;text-align:left;letter-spacing:0.5px;line-height:26px;color:#333333;font-size:15px;text-align:justify;">
                                      Total Expected Fee for Express Entry Process using Federal Skilled Worker Program = INR 2,65,500, including Tax, the Canadian Federal Govt Fee (Including Applicant and family members if applicable), Total CAD 1525 + Canadian Federal Govt Biometrics Fee (Single Applicant CAD 85 and family of two or more $170).
                                    </p>
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

                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td align="center" valign="top">
                              <table cellpadding="0" cellspacing="0" border="0" width="580" style="border-collapse:collapse;border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                                <tr>
                                  <td align="left" valign="top" style="padding:8px;">
                                    <p style="padding:12px;border-bottom:1px solid #333333;text-align:left;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#ffffff;background-image:linear-gradient(to bottom right,#002868,#4172c2);border-radius:5px;text-transform:uppercase;">
                                      Process 1 Payment
                                    </p>
                                    <p style="padding:0 20px 20px 20px;border-bottom:1px solid #333333;text-align:justify;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#333333;">
                                      Immigration Consultation and representation service: 1,18,000, Including Tax Due and fully earned when paid, and this agreement is signed + CAD 250-300 WES Assessment Fee.
                                    </p>
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

                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td align="center" valign="top">
                              <table cellpadding="0" cellspacing="0" border="0" width="580" style="border-collapse:collapse;border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                                <tr>
                                  <td align="left" valign="top" style="padding:8px;">
                                    <p style="padding:12px;border-bottom:1px solid #333333;text-align:left;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#ffffff;background-image:linear-gradient(to bottom right,#002868,#4172c2);border-radius:5px;text-transform:uppercase;">
                                      Process 2 Payment
                                    </p>
                                    <p style="padding:0 20px 20px 20px;border-bottom:1px solid #333333;text-align:justify;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#333333;">
                                      Immigration Consultation and representation service: INR 1,18,000, Including Tax Due and fully earned once paid, only after ITA and/or Provincial Nomination received.
                                    </p>
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

                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td align="center" valign="top">
                              <table cellpadding="0" cellspacing="0" border="0" width="580" style="border-collapse:collapse;border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                                <tr>
                                  <td align="left" valign="top" style="padding:8px;">
                                    <p style="padding:12px;border-bottom:1px solid #333333;text-align:left;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#ffffff;background-image:linear-gradient(to bottom right,#002868,#4172c2);border-radius:5px;text-transform:uppercase;">
                                      Process 3 Payment
                                    </p>
                                    <p style="padding:0 20px 20px 20px;border-bottom:1px solid #333333;text-align:justify;margin-top:10px;letter-spacing:0.5px;line-height:26px;color:#333333;">
                                      <strong>Note:</strong> Process 3 (Optional) INR 29500, Including Tax, has to be paid extra ONLY if your case requires the PNP option if eligible. But you still have to read/agree to sign agreements for all processes now to get your future discount, avoid administrative costs and give us blanket authorization to look for PNP options for faster possibility of success.
                                    </p>
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

                <!-- payment heading (no button) -->
                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;margin-top:20px;">
                  <tbody>
                    <tr>
                      <td align="center" valign="top">
                        <p style="padding:10px 20px;text-align:center;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:620;color:#333333;">
                          Complete your Payment
                        </p>
                        <p style="padding:0 20px 0px 20px;text-align:center;font-family:Roboto,Arial,sans-serif;font-size:14px;color:#333333;">
                          Please find the Bank Details to Transfer Online :
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- summary + bullet list -->
                <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td align="center" valign="top" style="padding-top:0;">
                              <table cellpadding="0" cellspacing="0" border="0" width="620" style="border-collapse:collapse;border-radius:5px;font-family:Roboto,Arial,sans-serif;">
                                <tr>
                                  <td align="left" valign="top">
                                    <p style="padding:40px 20px 20px 20px;text-align:left;letter-spacing:0.5px;line-height:26px;color:#333333;font-size:15px;">
                                      This could be your investment for better future. With your permission , we want to start process to provide you Immigration consultation and representation service. Please proceed immediately by contacting our team to know and get current special discount. After you pay for Process 1 , sign the retainer agreement(s) (mandated by ICCRC Regulatory body) we will start your process. You will get final retainer agreement(s) signed by our ICCRC RCIC
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left" valign="top">
                                    <p style="padding:0 20px 20px 20px;text-align:left;letter-spacing:0.5px;line-height:26px;color:#333333;font-size:15px;">
                                      Summary overview of Immigration consulting and representation process as per all retainer agreement(s)
                                    </p>
                                    <ul style="padding:0 10px 20px 40px;text-align:left;letter-spacing:0.5px;line-height:34px;color:#333333;font-size:15px;list-style-type:disc;">
                                      <li>Assist with ECA credential assessment completion.</li>
                                      <li>Assist with Medical Examination process to be completed in advance.</li>
                                      <li>Assist to gather all required documents and file application when "Invitation to apply" is received.</li>
                                      <li>Provide ongoing representation to your application with government offices in Canada and India.</li>
                                      <li>Provide regular updates to you until decision is made by government of Canada.</li>
                                    </ul>
                                    <p style="padding:0 20px 20px 20px;text-align:left;letter-spacing:0.5px;line-height:26px;color:#333333;font-size:15px;">
                                      Once we receive proof of payment for Process 1 and signed copy of retainer agreement(s) we will assign 1 Coordinators . They will work closely with RCIC Authorized Canadian Immigration Consultant from Canada to provide you on going support and get answers for all your immigration related questions.
                                    </p>
                                    <p style="padding:0 20px 20px 20px;text-align:left;letter-spacing:0.5px;line-height:26px;color:#333333;font-size:15px;">
                                      We closely work with our offices, associates and partners to provide guidance/referral to cover per-departure and post landing activities along with Job search assistance.
                                    </p>
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

                
                <!-- footer with social icons -->
                <table align="center" width="620" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:620px;margin-top:20px;margin-bottom:20px;">
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

                                <!-- social icons row (forced horizontal) -->
                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;">
                                  <tbody>
                                    <tr>
                                      <td style="padding:0 5px;">
                                        <a href="https://www.facebook.com/xiphiasimmigration" target="_blank" style="text-decoration:none;">
                                          <img src="https://xiphiasimmigration-com.vercel.app/images/footer/social/facebook.svg" width="18" height="18" style="display:block;border:0;" alt="Facebook" />
                                        </a>
                                      </td>
                                      <td style="padding:0 5px;">
                                        <a href="https://twitter.com/XiphiasInfo" target="_blank" style="text-decoration:none;">
                                          <img src="https://xiphiasimmigration-com.vercel.app/images/footer/social/x.svg" width="18" height="18" style="display:block;border:0;" alt="Twitter" />
                                        </a>
                                      </td>
                                      <td style="padding:0 5px;">
                                        <a href="https://www.linkedin.com/company/xiphias-immigration-pvt-limited?trk=prof-following-company-logo" target="_blank" style="text-decoration:none;">
                                          <img src="https://xiphiasimmigration-com.vercel.app/images/footer/social/linkedin.svg" width="18" height="18" style="display:block;border:0;" alt="LinkedIn" />
                                        </a>
                                      </td>
                                      <td style="padding:0 5px;">
                                        <a href="https://www.instagram.com/xiphias.immigration/" target="_blank" style="text-decoration:none;">
                                          <img src="https://xiphiasimmigration-com.vercel.app/images/footer/social/instagram.svg" width="18" height="18" style="display:block;border:0;" alt="Instagram" />
                                        </a>
                                      </td>
                                      <td style="padding:0 5px;">
                                        <a href="https://www.youtube.com/@immigrationxiphias5228" target="_blank" style="text-decoration:none;">
                                          <img src="https://xiphiasimmigration-com.vercel.app/images/footer/social/youtube.svg" width="18" height="18" style="display:block;border:0;" alt="YouTube" />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <!-- app badges row (horizontal) -->
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

export default function CanadaAssessmentReportPage() {
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
