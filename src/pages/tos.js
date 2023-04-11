import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';

class TOSPage extends React.Component {
	render() {
		const siteTitle = "Lil Pink's Pastries | Terms of Service";

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO
					title="Lil Pink's Pastries Privacy Policy"
					keywords={[ `lil pinks pastries`, `lilpinkspastries`, `tos`, `terms` ]}
				/>
				<div id="outputPage" class="ContractText">
					<div class="format-html">
						<div data-exp="simple2" class="outputVersion1">
							<p>
								<h1>TERMS AND CONDITIONS</h1>
							</p>
							<p>
								These terms and conditions (the "Terms and Conditions") govern the use of this site.
								This Site is owned and operated by Lil Pink's Pastries. This Site is a general
								business/brochure website.<br />
								<br />By using this Site, you indicate that you have read and understand these Terms and
								Conditions and agree to abide by them at all times.
							</p>
							<div>
								<p>
									<h2>Intellectual Property</h2>
									<br />All content published and made available on our Site is the property of Lil
									Pink's Pastries and the Site's creators. This includes, but is not limited to
									images, text, logos, documents, downloadable files and anything that contributes to
									the composition of our Site.
								</p>
							</div>
							<div>
								<p>
									<h2>Limitation of Liability</h2>
									<br />Lil Pink's Pastries and our directors, officers, agents, employees,
									subsidiaries, and affiliates will not be liable for any actions, claims, losses,
									damages, liabilities and expenses including legal fees from your use of the Site.
								</p>
							</div>
							<div>
								<p>
									<h2>Indemnity</h2>
									<br />Except where prohibited by law, by using this Site you indemnify and hold
									harmless Lil Pink's Pastries and our directors, officers, agents, employees,
									subsidiaries, and affiliates from any actions, claims, losses, damages, liabilities
									and expenses including legal fees arising out of your use of our Site or your
									violation of these Terms and Conditions.
								</p>
							</div>
							<div>
								<p>
									<h2>Applicable Law</h2>
									<br />These Terms and Conditions are governed by the laws of the State of Colorado.
								</p>
							</div>
							<div>
								<p>
									<h2>Severability</h2>
									<br />If at any time any of the provisions set forth in these Terms and Conditions
									are found to be inconsistent or invalid under applicable laws, those provisions will
									be deemed void and will be removed from these Terms and Conditions. All other
									provisions will not be affected by the removal and the rest of these Terms and
									Conditions will still be considered valid.
								</p>
							</div>
							<div>
								<p>
									<h2>Changes</h2>
									<br />These Terms and Conditions may be amended from time to time in order to
									maintain compliance with the law and to reflect any changes to the way we operate
									our Site and the way we expect users to behave on our Site. We will notify users by
									email of changes to these Terms and Conditions or post a notice on our Site.
								</p>
							</div>
							<div>
								<p>
									<h2>Contact Details</h2>
									<br />Please contact us if you have any questions or concerns. Our contact details
									are as follows:<br />
									<br />(404) 693-0739<br />ash@ashwigltd.com<br />1850 Bassett St, Denver, CO 80202
								</p>
								<p>You can also contact us through the feedback form available on our Site.</p>
							</div>
							<p>Effective Date: 14th day of April, 2022</p>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default TOSPage;
