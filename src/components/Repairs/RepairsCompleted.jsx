import React, { useState } from 'react';
import { ReviewModal } from '../ReviewModalOnly';

// Restored Client Repair Completed Page Component
export default function ClientRepairCompleted() {
	const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

	const handleSave = () => {
		setIsReviewModalOpen(true);
	};

	const handleCloseReview = () => {
		setIsReviewModalOpen(false);
	};
	return (
		<div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
			<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">

				{/* Status Notification */}
				<div className="bg-gray-100 border-l-4 border-gray-400 text-gray-800 p-4 rounded-lg flex justify-between items-center mb-6">
					<p className="font-medium">Repair request completed.</p>
					<span className="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded-full">Completed</span>
				</div>

				{/* Stepper */}
				<div className="w-full mb-8">
					<ol className="flex items-center w-full text-sm font-medium text-center text-gray-500">
						{['Ready','In Progress','Delivery','Completed'].map((step,i) => (
							<li key={step} className={`flex ${i < 3 ? 'md:w-full items-center text-blue-600 after:content-[\'\'] after:w-full after:h-1 after:border-b after:border-blue-600 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10' : 'items-center text-blue-600'}`}> 
								<span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
									<svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
									{step}
								</span>
							</li>
						))}
					</ol>
				</div>

				{/* Request Content */}
				<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">

					{/* Request Info */}
					<div className="relative pb-6 border-b border-gray-200">
						<h2 className="text-xl font-semibold text-gray-900 mb-4">Request Information</h2>
						<div className="absolute top-0 right-0 text-right">
							<p className="text-xs text-gray-500">Estimates Reply</p>
							<p className="text-sm font-semibold text-gray-900">3-4 Days</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
							{[
								['Device','Samsung S25'],
								['Pickup Address','112, Normal Road, Baliwasan Zamboanga City'],
								['Device Type','Smartphone'],
								['Preferred Time','Oct 25, 2025'],
								['Repair Type','Screen Replacement'],
								['Service Type','Pickup']
							].map(([label,value]) => (
								<div key={label}>
									<span className="text-gray-500">{label}</span>
									<p className="font-medium text-gray-800">{value}</p>
								</div>
							))}
							<div className="md:col-span-2">
								<span className="text-gray-500">Description</span>
								<p className="font-medium text-gray-800">
									The screen of the phone is broken and it is not turning on.
								</p>
							</div>
						</div>
					</div>

					{/* Shop Info & Images */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-b border-gray-200 pb-6">
						<div>
							<h2 className="text-xl font-semibold text-gray-900 mb-4">Shop Information</h2>
							<div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 text-sm">
								{[
									['TechFix Pro',''],
									['Address','5433 Dona Benita Drive, Canelar Zamboanga City'],
									['Email','techfix@gmail.com'],
									['Phone','998-505-177']
								].map(([label,value],i) => (
									<div key={label}>
										{i===0 ? (
											<h3 className="font-semibold text-gray-900">{label}</h3>
										) : (
											<>
												<span className="text-gray-500">{label}</span>
												<p className="font-medium text-gray-800">{value}</p>
											</>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Reference Images */}
						<div>
							<h2 className="text-xl font-semibold text-gray-900 mb-4">Reference Images</h2>
							<div className="flex flex-wrap gap-4">
								{['Phone Front','Phone Back'].map(img => (
									<img
										key={img}
										src={`https://placehold.co/150x150/e0f2fe/3b82f6?text=${encodeURIComponent(img)}`}
										alt={img}
										className="w-24 h-24 rounded-lg object-contain border border-gray-200 bg-white p-1"
									/>
								))}
							</div>
						</div>
					</div>

					{/* Assessment & Quotation */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-b border-gray-200 pb-6">
						<div>
							<h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment</h2>
							<div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 text-sm">
								{[
									['Device Condition','Not Good.'],
									['Observed Issues','The phone might have internal problems.'],
									['Recommendation Summary','Overall it can be done.']
								].map(([label,value]) => (
									<div key={label}>
										<span className="text-gray-500">{label}</span>
										<p className="font-medium text-gray-800">{value}</p>
									</div>
								))}

								<div>
									<span className="text-gray-500">References</span>
									<div className="flex flex-wrap gap-4 mt-2">
										{['Ref 1','Ref 2'].map(r => (
											<img
												key={r}
												src={`https://placehold.co/150x150/e0f2fe/3b82f6?text=${encodeURIComponent(r)}`}
												alt={r}
												className="w-24 h-24 rounded-lg object-contain border border-gray-200 bg-white p-1"
											/>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Quotation */}
						<div>
							<h2 className="text-xl font-semibold text-gray-900 mb-4">Quotation</h2>
							<div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 text-sm">

								{/* Labor Fee */}
								<div className="flex justify-between">
									<span className="text-gray-600">Labor Fee:</span>
									<span className="font-medium text-gray-800">500.00 PHP</span>
								</div>

								{/* Parts */}
								<div className="border-t border-gray-200 pt-3">
									<span className="text-gray-600">Parts Cost:</span>

									{[
										['Samsung S25 Screen','4,500.00 PHP'],
										['Samsung Front Camera','2,000.00 PHP']
									].map(([part,cost]) => (
										<div key={part} className="flex justify-between items-center mt-1">
											<span className="text-gray-500 pl-2">{part}</span>
											<span className="font-medium text-gray-800">{cost}</span>
										</div>
									))}
								</div>

								{/* Total */}
								<div className="border-t border-gray-200 pt-3">
									<div className="flex justify-between text-base">
										<span className="font-semibold text-gray-900">Total Estimate:</span>
										<span className="font-bold text-blue-600">7,000.00 PHP</span>
									</div>
								</div>

								{/* Completion & Warranty */}
								<div className="border-t border-gray-200 pt-3 space-y-1">
									<div className="flex justify-between">
										<span className="text-gray-600">Estimated Completion Time:</span>
										<span className="font-medium text-gray-800">5 days</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Warranty Coverage:</span>
										<span className="font-medium text-gray-800">6 Months</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Transaction Details */}
					<div className="grid grid-cols-1 pt-6 border-b border-gray-200 pb-6">
						<div>
							<h2 className="text-xl font-semibold text-gray-900 mb-4">Transaction Details</h2>
							<div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
									{[
										['Paid by:','GCash'],
										['Address:','112, Normal Road, Baliwasan Zamboanga City'],
										['Invoice:','View >'],
										['Contact:','+63 9875567412'],
										['Request Time:','10-20-2025 09:18'],
										['Payment Time:','10-22-2025 10:41']
									].map(([label,value]) => (
										<div key={label}>
											<span className="text-gray-500">{label}</span>
											{label === 'Invoice:' ? (
												<a href="#" className="font-medium text-blue-600 hover:underline">{value}</a>
											) : (
												<p className="font-medium text-gray-800">{value}</p>
											)}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* User Review */}
					<div className="grid grid-cols-1 pt-6">
						<div>
							<h2 className="text-xl font-semibold text-gray-900 mb-4">Your Review</h2>
							<div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
								<div className="flex items-center justify-between">
									<div className="flex items-center">
										<img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/dbeafe/1e40af?text=JD" alt="User Avatar" />
										<div className="ml-3">
											<p className="text-sm font-semibold">johndoe</p>
											<div className="flex items-center">
												<span className="text-xs text-yellow-500">★★★★★</span>
												<span className="text-xs text-gray-500 ml-2">1 Month Ago</span>
											</div>
										</div>
									</div>

									<div className="flex items-center gap-3">
										<span className="text-sm text-gray-600">23</span>

										<button className="bg-white text-gray-500 hover:text-blue-600 border-gray-500">
											<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.8-1.03 1.9-1.8 3.1-2.2v1.1c-1 .4-1.8.9-2.4 1.5L6.6 10.5zM17.4 10.5c.8-1.03 1.9-1.8 3.1-2.2v1.1c-1 .4-1.8.9-2.4 1.5L17.4 10.5zM12 3a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm-1.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
											</svg>
										</button>

										<button className="bg-white text-gray-500 hover:text-gray-900 border-gray-500">
											<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
											</svg>
										</button>
									</div>
								</div>

								<p className="mt-3 text-sm text-gray-700">
									Great Job. The service was amazing, the technician was very professional and the shop is very welcoming.
								</p>
							</div>
						</div>
					</div>

				</div>

				<div className="mt-6 space-y-4">

					{/* Support Center Box */}
					<div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
						<h3 className="text-blue-700 font-bold mb-1">Support Center</h3>
						<p className="text-blue-600 text-xs">
							Having issues with your request?{" "}
							<a href="#" className="underline font-medium">Contact Support</a>
						</p>
					</div>

					{/* Action Button */}
					<div className="flex justify-end pb-8">
						<button 
							onClick={handleSave}
							className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-8 rounded-lg shadow-sm transition-colors"
						>
							Review
						</button>
					</div>
				</div>

			</main>

			{/* Review Modal */}
			{isReviewModalOpen && <ReviewModal onClose={handleCloseReview} />}

			{/* Footer */}
			<footer className="bg-white border-t border-gray-200 mt-auto w-full">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16">
						<div className="col-span-2 md:col-span-4 lg:col-span-1">
							<a href="#" className="text-2xl font-extrabold text-blue-600">PixelPatch</a>
							<p className="mt-3 text-sm text-gray-600">Where technology and expertise meet to bring your gadgets back to life.</p>
						</div>

						{[
							['Quick Links',['AI Assistant','Find Service','Partner']],
							['Company',['About Us','Career']],
							['Support',['Help Center','Terms of Service','Privacy Policy']],
							['Connect With Us',['Facebook','Instagram','X (Twitter)']]
						].map(([section,items]) => (
							<div key={section}>
								<h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{section}</h3>
								<ul className="mt-4 space-y-3">
									{items.map(item => (
										<li key={item}>
											<a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{item}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="border-t border-gray-200 py-6">
						<p className="text-center text-sm text-gray-500">
							&copy; 2025 PixelPatch Inc. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
