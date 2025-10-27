// Logo.js - VU Amsterdam logo canvas drawing
function zetgrafiekenlogo() {
    var canvas = document.getElementById('logocanvas');
    if (!canvas || !canvas.getContext) {
        return;
    }
    
    var ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set font and colors
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.fillStyle = '#003366'; // Dark blue
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Draw VU logo text
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    
    ctx.fillText('VU', centerX - 100, centerY);
    
    // Add Amsterdam text
    ctx.font = 'bold 24px Arial, sans-serif';
    ctx.fillText('AMSTERDAM', centerX + 50, centerY - 10);
    
    // Add university text
    ctx.font = '16px Arial, sans-serif';
    ctx.fillText('VRIJE UNIVERSITEIT', centerX + 50, centerY + 15);
    
    // Draw decorative elements
    ctx.strokeStyle = '#003366';
    ctx.lineWidth = 2;
    
    // Draw lines
    ctx.beginPath();
    ctx.moveTo(centerX - 150, centerY + 30);
    ctx.lineTo(centerX + 150, centerY + 30);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX - 150, centerY - 30);
    ctx.lineTo(centerX + 150, centerY - 30);
    ctx.stroke();
}

// Call this function when the page loads
if (typeof window !== 'undefined') {
    window.zetgrafiekenlogo = zetgrafiekenlogo;
}