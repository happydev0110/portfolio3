import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Tony Wong | Personal Portfolio - ${pageTitle}`;
	}, [pageTitle]);
};
