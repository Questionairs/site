document.addEventListener('DOMContentLoaded', () => {
  // Handle dropdown menu toggle
  document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function () {
      const dropdownContent = this.nextElementSibling;
      const isVisible = dropdownContent.style.display === 'block';
      
      // Hide all dropdowns
      document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.display = 'none';
      });

      // Toggle the current dropdown
      dropdownContent.style.display = isVisible ? 'none' : 'block';
    });
  });

  // Close dropdowns if clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn')) {
      document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.display = 'none';
      });
    }
  });
});
