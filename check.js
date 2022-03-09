function generate() {
  console.log('a')
  baseURL = document.getElementById('baseURL').value;
  source = document.getElementById('source-select').value;
  medium = document.getElementById('medium-select').value;
  campaign = document.getElementById('campaign').value;
  term = document.getElementById('term').value;
  content = document.getElementById('content-select').value;

  finalUrl = 
  (baseURL ? `${baseURL}` : '') 
  + (source ? `?utm_source=${source}` : '') 
  + (medium ? `&utm_medium=${medium}` : '') 
  + (campaign ? `&utm_campaign=${campaign}` : '') 
  + (term ? `&utm_term=${term}` : '') 
  + (content ? `&utm_content=${content}` : '');
  
  document.getElementById('result').style.display = 'block';
  document.getElementById('finalURL').textContent = finalUrl.replaceAll(' ','-')
}

$( document ).ready(function() {

  new ClipboardJS('.btn');
  
  });



/**
 * Helper function for creating source
 **/
 function crearteSource(name, id) {
  return {
    name: name,
    id: id,
  };
}

/**
 * Helper function for creating model
 **/
function crearteMedium(name, id, source) {
  return {
    name: name,
    id: id,
    source: source,
  };
}

/**
 * Helper function for creating configuration
 **/
function createContent(name, id, model) {
  return {
    name: name,
    id: id,
    model: model,
  };
}

/**
 * Removes all options but the first value in a given select
 * and than selects the only remaining option
 **/
function removeOptions(select) {
  while (select.options.length > 1) {                
    select.remove(1);
  }
  
  select.value = "";
}

/**
 * Adds given options to a given select
 **/
function addOptions(select, options) {
  console.log(select, options)
  options.forEach(function(option) {
    select.options.add(new Option(option.name, option.id));
  });
}

/**
 * Select elements references
 **/
var sourcesSelect = document.getElementById('source-select');
var modelsSelect = document.getElementById('medium-select');
var configurationSelect = document.getElementById('content-select');

/**
 * Available sources
 **/
var sources = [
  crearteSource('Google 🔥', 'Google'),
  crearteSource('Facebook 🔥', 'Facebook'),
  crearteSource('Instagram 🔥', 'Instagram'),
  crearteSource('e-Brochure', 'e-brochure'),
  crearteSource('Twitter', 'Twitter'),
  crearteSource('TikTok', 'TikTok'),
  crearteSource('Detik 📰', 'Detik'),
  crearteSource('Kompas 📰', 'Kompas'),
  crearteSource('OLX 📰', 'OLX'),
  crearteSource('Selebgram', 'Selebgram'),
  crearteSource('Email', 'Email'),
  crearteSource('Survey', 'Survey'),
  crearteSource('Forum', 'Forum'),
];

/**
 * Available models
 **/
var models = [
  crearteMedium('CPM 💰', 'CPM', 'Google'),
  crearteMedium('CPC 💸', 'CPC', 'Google'),
  crearteMedium('SEM 🔥', 'SEM', 'Google'),
  crearteMedium('GDN', 'GDN', 'Google'),
  crearteMedium('YouTube', 'YouTube', 'Google'),
  crearteMedium('SmartAds', 'SmartAds', 'Google'),
  crearteMedium('Maps 🆕', 'Maps', 'Google'),
  crearteMedium('Discovery 🆕', 'Discovery', 'Google'),
  crearteMedium('Performance Max 🆕', 'Performance-Max', 'Google'),
  crearteMedium('CPM 💰', 'CPM', 'Facebook'),
  crearteMedium('CPC 💸', 'CPC', 'Facebook'),
  crearteMedium('Post 🔥', 'Post', 'Facebook'),
  crearteMedium('Story 🔥', 'Story', 'Facebook'),
  crearteMedium('Video', 'Video', 'Facebook'),
  crearteMedium('Swipeup', 'Swipeup', 'Facebook'),
  crearteMedium('Marketplace 🔥', 'Marketplace', 'Facebook'),
  crearteMedium('FormLeads 🔥', 'FormLeads', 'Facebook'),
  crearteMedium('CPM 💰', 'CPM', 'Instagram'),
  crearteMedium('CPC 💸', 'CPC', 'Instagram'),
  crearteMedium('Post 🔥', 'Post', 'Instagram'),
  crearteMedium('Story 🔥', 'Story', 'Instagram'),
  crearteMedium('Video', 'Video', 'Instagram'),
  crearteMedium('Swipeup', 'Swipeup', 'Instagram'),
  crearteMedium('FormLeads 🔥', 'FormLeads', 'Instagram'),
  crearteMedium('e-Brochure Display', 'ebrochure-display', 'e-brochure'),
  crearteMedium('e-Brochure Link', 'ebrochure-link', 'e-brochure'),
  crearteMedium('Tweet', 'Tweet', 'Twitter'),
  crearteMedium('Display', 'Display', 'Twitter'),
  crearteMedium('Video', 'Video', 'Twitter'),
  crearteMedium('Video', 'Video', 'TikTok'),
  crearteMedium('Seleb TikTok', 'Selebtok', 'TikTok'),
  crearteMedium('Display', 'Display', 'Detik'),
  crearteMedium('Artikel', 'Display', 'Detik'),
  crearteMedium('Display', 'Display', 'Kompas'),
  crearteMedium('Artikel', 'Display', 'Kompas'),
  crearteMedium('Display', 'Display', 'OLX'),
  crearteMedium('Artikel', 'Display', 'OLX'),
  crearteMedium('SwipeUp', 'SwipeUp', 'Selebgram'),
  crearteMedium('LinkBio', 'LinkBio', 'Selebgram'),
  crearteMedium('Newsletter', 'Newsletter', 'Email'),
  crearteMedium('Click', 'Click', 'Survey'),
  crearteMedium('Artikel', 'Artikel', 'Forum'),
];

/**
 * Available configurations
 **/
var configurations = [
  createContent('Paid', 'Paid', 'CPM'),
  createContent('Paid', 'Paid', 'CPC'),
  createContent('Paid', 'Paid', 'SEM'),
  createContent('Paid', 'Paid', 'GDN'),
  createContent('Paid', 'Paid', 'YouTube'),
  createContent('Paid', 'Paid', 'SmartAds'),
  createContent('Paid', 'Paid', 'Discovery'),
  createContent('Paid', 'Paid', 'Performance-Max'),
  createContent('Paid', 'Paid', 'Post'),
  createContent('Paid', 'Paid', 'Story'),
  createContent('Paid', 'Paid', 'Swipeup'),
  createContent('Paid', 'Paid', 'FormLeads'),
  createContent('Paid', 'Paid', 'ebrochure-display'),
  createContent('Paid', 'Paid', 'ebrochure-link'),
  createContent('Paid', 'Paid', 'Tweet'),
  createContent('Paid', 'Paid', 'Display'),
  createContent('Paid', 'Paid', 'Video'),
  createContent('Paid', 'Paid', 'Selebtok'),
  createContent('Paid', 'Paid', 'LinkBio'),
  createContent('Paid', 'Paid', 'Newsletter'), 

  createContent('Organic', 'Organic', 'Post'),
  createContent('Organic', 'Organic', 'Story'),
  createContent('Organic', 'Organic', 'Swipeup'),
  createContent('Organic', 'Organic', 'FormLeads'),
  createContent('Organic', 'Organic', 'Tweet'),
  createContent('Organic', 'Organic', 'Display'),
  createContent('Organic', 'Organic', 'Video'),
  createContent('Organic', 'Organic', 'LinkBio'),
  createContent('Organic', 'Organic', 'Newsletter'),
  createContent('Organic', 'Organic', 'ebrochure-display'),
  createContent('Organic', 'Organic', 'ebrochure-link'),
  
  createContent('Affiliate 🆕', 'Affiliate', 'Post'),
  createContent('Affiliate 🆕', 'Affiliate', 'Story'),
  createContent('Affiliate 🆕', 'Affiliate', 'Swipeup'),
  createContent('Affiliate 🆕', 'Affiliate', 'FormLeads'),
  createContent('Affiliate 🆕', 'Affiliate', 'Tweet'),
  createContent('Affiliate 🆕', 'Affiliate', 'Display'),
  createContent('Affiliate 🆕', 'Affiliate', 'Video'),
  createContent('Affiliate 🆕', 'Affiliate', 'Selebtok'),
  createContent('Affiliate 🆕', 'Affiliate', 'LinkBio'),
  createContent('Affiliate 🆕', 'Affiliate', 'Newsletter'),
];

/**
 * Updates models
 **/
function updateModels() {
  var selectedsource = sourcesSelect.value;
  var options = models.filter(function(model) {
    return model.source === selectedsource;
  });
  
  removeOptions(modelsSelect);
  removeOptions(configurationSelect);
  addOptions(modelsSelect, options);
}

/**
 * Updates configurations
 */
function updateConfigurations() {
  var selectedModel = modelsSelect.value;
  var options = configurations.filter(function(configuration) {
    return configuration.model === selectedModel;
  });
  
  removeOptions(configurationSelect);
  addOptions(configurationSelect, options);
}

/**
 * Adds options to source select
 **/
addOptions(sourcesSelect, sources);