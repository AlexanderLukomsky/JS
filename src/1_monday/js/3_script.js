(function monday_3() {
  const small = document.querySelector('.small');
  const medium = document.querySelector('.medium');
  const big = document.querySelector('.big');

  const onSmallClick = event => {
    console.log(event.target);
  };

  const onMediumClick = event => {
    console.log(event.currentTarget);
  };

  const onBigClick = event => {
    console.log(event.currentTarget);
  };

  small.addEventListener('click', onSmallClick);

  medium.addEventListener('click', onMediumClick);

  big.addEventListener('click', onBigClick);

  document.querySelector('.link-preventDefault').addEventListener('click', event => {
    event.preventDefault();
    console.log('event.preventDefault();');
  });

  document.querySelector('.buttons-row').addEventListener('click', event => {
    const button = event.target.closest('.button');

    if (button) {
      console.log(button.id);
    }
  });
})();
