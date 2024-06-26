import React from 'react'
import { Typography ,Grid} from '@mui/material'
import Header from './Header';
import {useMediaQuery} from '@mui/material';
import { Footer } from './Footer';

export const Terms = () => {
	const mobile = useMediaQuery('(min-width:600px)');
	const typographytStyle = {
		color: 'var(--Black, #000)',
		textAlign: 'center',
		fontFamily: 'Space Grotesk',
		fontSize: 36,
		fontStyle: 'normal',
		fontWeight: 700,
		lineHeight: '48px',
		marginTop: '36px',
		marginBottom:'32px'// 133.333%
	};
	const typographytmStyle = {
		color: 'var(--Black, #000)',
		textAlign: 'center',
		fontFamily: 'Space Grotesk',
		fontSize: 20,
		fontStyle: 'normal',
		fontWeight: 700,
		lineHeight: '48px',
		marginTop: '36px',
		marginBottom:'32px'// 133.333%
	};
	const typographyhStyle = {
		color: 'var(--Black, #000)',
    fontFamily: 'Space Grotesk',
    fontSize: 26,
		fontStyle: 'normal',
		marginBottom: '36px',
		marginTop:'12px',
    fontWeight: 700,
    lineHeight: '156.023%', // 40.566px
    fontFeatureSettings: "'clig' off, 'liga' off", // 133.333%
	};
	const typographysubStyle = {
		color: 'var(--Black, #000)',
		fontFamily: 'Space Grotesk',
		fontSize: 20,
		fontStyle: 'normal',
		fontWeight: 400,
		lineHeight: '156.023%', // 31.205px
		fontFeatureSettings: "'clig' off, 'liga' off", // 133.333%
		marginBottom: '36px',
		marginTop:'12px'
	};
	const typographymsubStyle = {
		color: 'var(--Black, #000)',
    fontFamily: 'Space Grotesk',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '156.023%', // 21.843px
    fontFeatureSettings: "'clig' off, 'liga' off",
	}
	const typographymhStyle = {
		color: 'var(--Black, #000)',
		fontFamily: 'Space Grotesk',
		fontSize: 16,
		fontStyle: 'normal',
		fontWeight: 700,
		lineHeight: 'normal',
		marginBottom: '36px',
		marginTop:'12px'
	}
  return (
	  <>
		  <Header/>
		  <Grid container lg={12} style={{justifyContent:'center'}}>
			  <Grid container lg={10}>
			  <Typography style={mobile?typographytmStyle:typographytStyle}>
      Terms and Conditions
				  </Typography>  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Content Ownership:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  All content on this website, including text, images, and multimedia, is the property of ReviewMyBook. Unauthorized use is prohibited.
				  </Typography>  
				  </Grid>

				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Use of Information:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  Information provided on this website is for general informational purposes. It should not be considered as professional or expert advice.  </Typography>  
				  </Grid>


				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  User Conduct:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  Users are expected to engage in respectful behavior on the website. Any activity that could harm the website’s integrity or interfere with its functionality is strictly prohibited. Users are responsible for the security of their accounts and must not share login credentials.  </Typography>  
				  </Grid>



				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Copyright:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  All intellectual property rights, including copyrights, in the content of this website are owned by ReviewMyBook. You may not reproduce or distribute any content without permission. </Typography>  
				  </Grid>



				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Intellectual Property Permissions:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  Users are permitted to share website content on social media with proper attribution. Permission must be sought for the use of any copyrighted material on the website. Users cannot copy, modify or distribute the content without explicit permission. </Typography>  
				  </Grid>



				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  External Links:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  This website may contain links to external websites. ReviewMyBook is not responsible for the content or practices of any linked site.  </Typography>  
				  </Grid>




				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Content Ownership:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  All content on this website, including text, images, and multimedia, is the property of ReviewMyBook. Unauthorized use is prohibited.
				  </Typography>  
				  </Grid>



				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Comments and User Content:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  Users are encouraged to engage respectfully. ReviewMyBook reserves the right to remove comments deemed inappropriate or violate these terms. </Typography>  
				  </Grid>



				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Privacy Policy:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  Please refer to our Privacy Policy for information on collecting, using, and protecting personal data. </Typography>  
				  </Grid>




				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Book Purchases:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  Any transactions related to the purchase of books listed are subject to terms specified during the checkout process. </Typography>  
				  </Grid>




				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Disclaimer:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  ReviewMyBook makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information contained on the website. </Typography>  
				  </Grid>




				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Liability Limitations:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  ReviewMyBook is not liable for any direct, indirect, or consequential loss or damage incurred by users in connection with the website’s use. This includes but is not limited to technical issues, server downtime, data loss, or other technical malfunctions. </Typography>  
				  </Grid>




				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Indemnification:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  Users agree to indemnify and hold the website and its owner harmless from any claims, damages, losses, or liabilities arising from their use of the website or any violation of the terms. </Typography>  
				  </Grid>



				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Accessibility:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  The website is committed to making its content as accessible as possible to users with disabilities. Users are encouraged to report accessibility issues via the provided contact information. </Typography>  
				  </Grid>



				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Cookies and Tracking Technologies:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  [If applicable, provide information on the use of cookies and tracking technologies and explain how user data is handled in accordance with privacy laws.]  </Typography>  
				  </Grid>



				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Termination of Access:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  The website reserves the right to terminate or suspend a user’s access to the website if they violate the terms. Conditions for termination will be outlined, and an appeals or reinstatement process may be specified. </Typography>  
				  </Grid>



				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Notification of Changes:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  Users will be notified of any significant changes to the terms and conditions. </Typography>  
				  </Grid>




				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Effective Date:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  These terms and conditions are effective as of [Specify the effective date]. Continued use of the website implies acceptance of any updates. </Typography>  
				  </Grid>




				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Governing Law:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  These terms and conditions are governed by and construed in accordance with the laws of [jurisdiction].  </Typography>  
				  </Grid>




				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographyhStyle:typographymhStyle}>
				  Contact Information:
				  </Typography>  
				  </Grid>
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
						  For any questions regarding these terms, please contact [contact email].
					  </Typography>  
				  </Grid>




				  
				  
				  <Grid item lg={12}>
				  <Typography style={mobile?typographysubStyle:typographymsubStyle}>
				  By using (ReviewMyBook’s website), you acknowledge that you have read, understood, and agree to these terms and conditions.  </Typography>  
				  </Grid>



							  </Grid>
		  </Grid>

	  <Footer/>
	  
	  
	  </>
  )
}
