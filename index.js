console.log('bobbyhadz.com');

// 👇️ using a CDN to import axios
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.6/+esm';

function axiosDownloadFile(url, fileName) {
  return axios({
    url,
    method: 'GET',
    responseType: 'blob',
  })
    .then(response => {
      const href = window.URL.createObjectURL(response.data);

      const anchorElement = document.createElement('a');

      anchorElement.href = href;
      anchorElement.download = fileName;

      document.body.appendChild(anchorElement);
      anchorElement.click();

      document.body.removeChild(anchorElement);
      window.URL.revokeObjectURL(href);
    })
    .catch(error => {
      console.log('error: ', error);
    });
}

const fileURL = 'http://localhost:39693/example-file.pdf';

axiosDownloadFile(fileURL, 'my-file.pdf');
