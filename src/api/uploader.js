// cloudinary 에 이미지를 업로드하고 url을 받아오도록 함
export async function uploadImage(file) {
	const data = new FormData();
	data.append('file', file);
	data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);

	return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
		method: 'POST',
		body: data,
	})
		.then((res) => res.json())
		.then((data) => data.url);
}
