export function initNewsletter() {
  const form = document.forms.namedItem('newsletter-signup');

  form.addEventListener('submit', async (evt) => {
    form.classList.add('loading');

    evt.preventDefault();

    const formData = new FormData(evt.target);
    const jsonData = Object.fromEntries(formData.entries());

    const response = await fetch(
      'http://localhost:1337/v1/functions/mail/public-newsletter-signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      }
    );

    form.classList.remove('loading');

    console.log(response);
  });
}
