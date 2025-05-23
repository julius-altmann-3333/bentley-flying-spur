window.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  document.getElementById('appointment-date').value = today;

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}`;
  document.getElementById('appointment-time').value = currentTime;
});
