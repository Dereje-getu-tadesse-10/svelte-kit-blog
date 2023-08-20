export const truncate = (txt: string | undefined, min: number) => {
	if (!txt) return '';
	if (txt.length > min) return `${txt.slice(0, min)}...`;
	return txt;
};
