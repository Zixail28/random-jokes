const img = document.querySelector('.img');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

btn.addEventListener('click', () => {
	img.classList.add('shake-img');
	fetch('./assets/chuck-jokes-ru.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
		text.innerHTML = data.value[parseInt(Math.random() * 575)].joke;
  });
	setTimeout(() => {
		img.classList.remove('shake-img');
	}, (Math.random() * 1000))
});

