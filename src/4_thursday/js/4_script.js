/* eslint no-magic-numbers:off */
const svg_thursday_4 = `<?xml version='1.0' encoding='iso-8859-1'?>
                        <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 315 315">
                          <g>
                            <path d="m256.774,23.942h-64.836v-6.465c0-9.636-7.744-17.477-17.263-17.477h-34.348c-9.521,0-17.266,7.841-17.266,17.478v6.465h-64.835c-9.619,0-17.445,7.76-17.445,17.297v11.429c0,7.168 4.42,13.33 10.698,15.951 1.989,39.623 13.5,231.193 14.018,239.801 0.222,3.696 3.284,6.58 6.987,6.58h170.033c3.703,0 6.766-2.884 6.987-6.58 0.518-8.607 12.028-200.178 14.018-239.801 6.278-2.621 10.698-8.783 10.698-15.951v-11.43c5.68434e-14-9.537-7.826-17.297-17.446-17.297zm-119.713-6.464c0-1.918 1.465-3.478 3.266-3.478h34.348c1.8,0 3.264,1.56 3.264,3.478v6.465h-40.877v-6.465zm-82.282,23.761c0-1.818 1.546-3.297 3.445-3.297h198.549c1.899,0 3.445,1.478 3.445,3.297v11.429c0,1.819-1.546,3.299-3.445,3.299h-198.548c-1.899,0-3.445-1.479-3.445-3.299v-11.429zm181.143,259.761h-156.848c-2.055-34.247-11.479-191.674-13.51-231.033h183.867c-2.031,39.359-11.454,196.786-13.509,231.033z"/>
                            <path d="m157.5,95.125c-3.866,0-7,3.134-7,7v176.109c0,3.866 3.134,7 7,7 3.866,0 7-3.134 7-7v-176.109c0-3.866-3.134-7-7-7z"/>
                            <path d="m110.2,102.04c-0.202-3.86-3.507-6.837-7.355-6.625-3.86,0.201-6.827,3.494-6.625,7.355l9.182,175.829c0.195,3.736 3.285,6.635 6.984,6.635 0.123,0 0.247-0.003 0.371-0.01 3.86-0.201 6.827-3.494 6.625-7.355l-9.182-175.829z"/>
                            <path d="m212.155,95.415c-3.899-0.223-7.153,2.764-7.355,6.625l-9.184,175.829c-0.202,3.861 2.765,7.154 6.625,7.355 0.125,0.007 0.248,0.01 0.371,0.01 3.698,0 6.789-2.898 6.984-6.635l9.184-175.829c0.202-3.861-2.764-7.154-6.625-7.355z"/>
                          </g>
                        </svg>`;
const api4 = {
  getFile() {
    return new Promise(res => {
      setTimeout(() => {
        res({ data: svg_thursday_4 });
      }, 1200);
    });
  },
  setFile(formData) {
    return new Promise(res => {
      setTimeout(() => {
        res({ data: formData });
      }, 600);
    });
  },
};

//load file with url
(function thursday_4_blob() {
  const button = document.querySelector('.button-blob');
  const onButtonLoadFileClick = async () => {
    button.innerHTML = '...wait';
    const res = await api4.getFile();

    loadWithUrl(res.data);
    button.innerHTML = 'Load File';
  };

  button.addEventListener('click', onButtonLoadFileClick);
  const loadWithUrl = content => {
    const container = document.querySelector('.common-container');

    const blob = new Blob([content], { type: 'svg' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');

    a.href = url;
    a.download = 'hello.svg';
    a.style = 'display:none';
    container.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  };
})();

//load file with base64
(function thursday_4_base64() {
  const container = document.querySelector('.common-container');
  const button = document.querySelector('.button-base64');

  const onButtonLoadFileClick = async () => {
    button.innerHTML = '...wait';
    const res = await api4.getFile();

    loadWithBase64(res.data);
    button.innerHTML = 'Load File';
  };

  button.addEventListener('click', onButtonLoadFileClick);
  const loadWithBase64 = content => {
    const reader = new FileReader();
    const blob = new Blob([content]);

    reader.readAsDataURL(blob);

    reader.onload = () => {
      const url = reader.result;

      const a = document.createElement('a');

      container.appendChild(a);
      a.href = url;
      a.download = 'hello.svg';
      a.style = 'display:none';
      a.click();
      a.remove();
    };
  };
})();

// set file
(function thursday_4_set_file() {
  const input = document.querySelector('#file');
  const container = document.querySelector('.common-container');

  const onInputSelectFileClick = async e => {
    if (e.target.files && e.target.files.length) {
      const file = e.currentTarget.files[0];

      if (file.size > 400000) {
        alert('some error');

        return;
      }

      const img = document.querySelector('.image');
      const doc = document.querySelector('.doc');

      const formData = new FormData();

      formData.append('file', file);

      const res = await api4.setFile(formData);
      const blob = new Blob([res.data.get('file')]);
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        if (img) {
          img.remove();
        }
        if (doc) {
          doc.remove();
        }
        const image = new Image();

        image.src = fileReader.result;

        image.onload = () => {
          image.className = 'image';
          container.appendChild(image);
        };
        image.onerror = async () => {
          const div = document.createElement('div');
          const text = await blob.text();

          div.classList.add('doc');
          div.innerHTML = text;
          container.appendChild(div);
        };
      };
    }
  };

  input.addEventListener('change', onInputSelectFileClick);
})();

//generator

(function thursday_4_generator() {
  function* generator() {
    console.log('1');
    const value = yield 'inProgress chunk 1';

    console.log('2');
    yield value;

    console.log('3');
    yield 'inProgress chunk 3';

    return 'completed';
  }
  const gen = generator();

  //  console.log(gen.next());
  //  console.log(gen.next('inProgress chunk 2'));
  // console.log(gen.next());
  // console.log(gen.next());
})();

//default
(function thursday_4() {
  const string = 'hey - hey - hey xD';
  let index = 0;
  let temp = string.length;

  setInterval(() => {
    if (index < string.length) {
      showString(string, index);
      index = index + 1;
    }

    if (index >= string.length) {
      removeString(string, temp);
      temp = temp - 1;
      if (temp <= 0) {
        index = 0;
        temp = string.length;
      }
    }
  }, 100);

  const showString = (str, index) => {
    const textContainer = document.querySelector('.text');

    textContainer.innerHTML = str.substring(0, index + 1);
  };

  const removeString = (str, temp) => {
    const textContainer = document.querySelector('.text');

    textContainer.innerHTML = str.substring(0, temp);
  };
})();
