document.getElementById('banner-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  var bannerName = document.getElementById('banner-name').value;
  var bannerType = document.getElementById('banner-type').value;
  var bannerSrc = document.getElementById('banner-src').value;
  var bannerUrl = document.getElementById('banner-url').value;

  // Check if any of the required fields are empty
  if (!bannerName || !bannerSrc || !bannerUrl) {
      Swal.fire({
          icon: 'warning',
          title: 'Please fill in all required fields',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000 // Adjust the duration of the message (in milliseconds)
      });
  } else {
      // If all required fields are filled, proceed with form submission
      Swal.fire({
          icon: 'info',
          title: 'Please wait...',
          toast: true,
          position: 'top-end',
          showConfirmButton: false
      });

      // Here you can submit the form or perform any other necessary action
      // For example, you can use AJAX to submit the form data to the server
      // Example: this.submit(); // Submit the form
  }
});
