'use client';

import { useState, useEffect } from 'react';

const offers = [
	{
		message: '🔥 Save 10% at Blockstream with CODE:ORANGEMART',
		url: 'https://store.blockstream.com/?code=ORANGEMART',
		cta: 'Secure your stack →',
	},
	{
		message: '🖥️ Save 30% on your first month of server hosting with CODE:ORANGEMART',
		url: 'https://pinehosting.com/clientarea/aff.php?aff=551',
		cta: 'Launch your game →',
	}
];

export default function PopupAd() {
	const [visible, setVisible] = useState(false);
	const [offer, setOffer] = useState(offers[0]);

	useEffect(() => {
		const hasSeen = sessionStorage.getItem('seenPopupAd');
		if (!hasSeen) {
			const random = Math.floor(Math.random() * offers.length);
			setOffer(offers[random]);
			setVisible(true);
			sessionStorage.setItem('seenPopupAd', 'true');
		}
	}, []);

	if (!visible) return null;

	return (
		<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md sm:max-w-lg bg-[#fff8f2] border border-orange-200 rounded-lg shadow-lg animate-fadeIn">
			<div className="relative p-4 sm:p-5">
				<button
					onClick={() => setVisible(false)}
					aria-label="Close popup"
					className="absolute top-3 right-3 text-xl text-orange-400 hover:text-orange-600 transition"
				>
					&times;
				</button>

				<div className="text-orange-900 text-base sm:text-lg leading-snug text-center sm:text-left">
					<span className="font-semibold">{offer.message}</span>
					<a
						href={offer.url}
						target="_blank"
						rel="noopener noreferrer"
						className="block sm:inline-block mt-1 sm:mt-0 sm:ml-2 text-[var(--primary)] hover:text-orange-600 font-bold underline underline-offset-2"
					>
						{offer.cta}
					</a>
				</div>
			</div>
		</div>
	);
}
