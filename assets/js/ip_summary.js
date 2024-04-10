document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=at_C4EkMe8rCoZwHzIz4BDaKQC4waVrs')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ipSummary').innerHTML = `
                <strong>IP:</strong> ${data.ip}<br>
                <strong>City:</strong> ${data.city}<br>
                <strong>State/Province:</strong> ${data.state_prov}<br>
                <strong>Country:</strong> ${data.country_name}<br>
                <strong>ISP:</strong> ${data.isp}<br>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('ipSummary').textContent = 'Failed to load IP summary.';
        });
});