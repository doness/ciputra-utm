function generate() {
  console.log('a')
  baseURL = document.getElementById('baseURL').value;
  source = document.getElementById('source').value;
  medium = document.getElementById('medium').value;
  campaign = document.getElementById('campaign').value;
  term = document.getElementById('term').value;
  content = document.getElementById('content').value;

  finalUrl = 
  (baseURL ? `${baseURL}` : '') 
  + (source ? `?utm_source=${source}` : '') 
  + (medium ? `&utm_medium=${medium}` : '') 
  + (campaign ? `&utm_campaign=${campaign}` : '') 
  + (term ? `&utm_term=${term}` : '') 
  + (content ? `&utm_content=${content}` : '')  
  
  
  document.getElementById('result').style.display = 'block';
  document.getElementById('finalURL').textContent = finalUrl.replaceAll(' ','-')
}