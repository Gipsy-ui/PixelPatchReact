import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export default function ClientRepairRejected() {
	const navigate = useNavigate();
	return (
		<div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
			<main className="flex-grow flex justify-center p-6">
				<div className="w-full max-w-4xl space-y-6">
					<div className="bg-red-100 border border-red-200 rounded-lg p-4 flex justify-between items-center">
						<p className="text-red-700 font-medium">The shop has declined your request.</p>
						<span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Rejected</span>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
						<h2 className="text-xl font-bold text-gray-900 mb-4">Request Information</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm">
							<div>
								<p className="text-xs text-gray-500 uppercase">Device Type</p>
								<p className="font-medium text-gray-900">Smartphone</p>
							</div>
							<div>
								<p className="text-xs text-gray-500 uppercase">Pickup Address</p>
								<p className="font-medium text-gray-900">112, Normal Road, Baliwasan Zamboanga City</p>
							</div>
							<div>
								<p className="text-xs text-gray-500 uppercase">Repair Type</p>
								<p className="font-medium text-gray-900">Screen Replacement</p>
							</div>
							<div>
								<p className="text-xs text-gray-500 uppercase">Preferred Time</p>
								<p className="font-medium text-gray-900">Oct 25, 2025</p>
							</div>
							<div className="md:col-span-2">
								<p className="text-xs text-gray-500 uppercase">Description</p>
								<p className="font-medium text-gray-900">The screen of the phone is broken and it is not turning on.</p>
							</div>
						</div>
					</div>
					<div className="bg-red-100 rounded-lg p-6 border border-red-200">
						<h3 className="text-lg font-bold text-red-800 mb-2">Reason for Rejection</h3>
						<p className="text-sm text-red-700">We currently can't provide this service as our technician has no experience about your device.</p>
					</div>
					<div className="bg-blue-100 p-4 rounded-lg flex items-center justify-between border border-blue-200">
						<p className="text-sm text-blue-800">
							<span className="font-bold">Support Center</span><br />
							<span className="text-xs">Having issues with your request? <a href="#" className="underline hover:text-blue-600">Contact Support</a></span>
						</p>
					</div>
					<div className="mt-2 flex justify-start">
						<button
							onClick={() => navigate(ROUTES.REPAIRS)}
							className="rounded-lg border border-gray-300 bg-white py-2 px-5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
						>
							← Back to Repairs
						</button>
					</div>
				</div>
			</main>
			<footer className="bg-white border-t border-gray-200 mt-auto w-full">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16">
						<div className="col-span-2 md:col-span-4 lg:col-span-1">
							<a href="#" className="text-2xl font-extrabold text-blue-600">PixelPatch</a>
							<p className="mt-3 text-sm text-gray-600">Where technology and expertise meet to bring your gadgets back to life.</p>
						</div>
						<div>
							<h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
							<ul className="mt-4 space-y-3">
								{['AI Assistant','Find Service','Partner'].map(item => (
									<li key={item}><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{item}</a></li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
							<ul className="mt-4 space-y-3">
								{['About Us','Career'].map(item => (
									<li key={item}><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{item}</a></li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
							<ul className="mt-4 space-y-3">
								{['Help Center','Terms of Service','Privacy Policy'].map(item => (
									<li key={item}><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{item}</a></li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect With Us</h3>
							<ul className="mt-4 space-y-3">
								{['Facebook','Instagram','X (Twitter)'].map(item => (
									<li key={item}><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{item}</a></li>
								))}
							</ul>
						</div>
					</div>
					<div className="border-t border-gray-200 py-6">
						<p className="text-center text-sm text-gray-500">© 2025 PixelPatch Inc. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}