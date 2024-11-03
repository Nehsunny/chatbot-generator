document.getElementById('generate-excuse').addEventListener('click', async () => {
    const category = document.getElementById('category').value;
    const response = await fetch(`http://localhost:3000/api/excuse/${category}`);
    
    if (response.ok) {
        const data = await response.json();
        document.getElementById('excuse-display').innerText = data.excuse;
    } else {
        document.getElementById('excuse-display').innerText = 'Error fetching excuse.';
    }
});

// Placeholder for submitting own excuses (can be implemented later)
document.getElementById('submit-excuse').addEventListener('click', () => {
    alert('Feature coming soon: Submit your own excuses!');
});
