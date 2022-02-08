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
 * Helper function for creating car
 **/
 function createCar(name, id) {
  return {
    name: name,
    id: id,
  };
}

/**
 * Helper function for creating model
 **/
function createModel(name, id, car) {
  return {
    name: name,
    id: id,
    car: car,
  };
}

/**
 * Helper function for creating configuration
 **/
function createConfiguration(name, id, model) {
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
var carsSelect = document.getElementById('source-select');
var modelsSelect = document.getElementById('medium-select');
var configurationSelect = document.getElementById('content-select');

/**
 * Available cars
 **/
var cars = [
  createCar('Google 🔥', 'Google'),
  createCar('Facebook 🔥', 'Facebook'),
  createCar('Instagram 🔥', 'Instagram'),
  createCar('Twitter', 'Twitter'),
  createCar('TikTok', 'TikTok'),
  createCar('Detik 📰', 'Detik'),
  createCar('Kompas 📰', 'Kompas'),
  createCar('OLX 📰', 'OLX'),
  createCar('Selebgram', 'Selebgram'),
  createCar('Email', 'Email'),
  createCar('Survey', 'Survey'),
  createCar('Forum', 'Forum'),
];

/**
 * Available models
 **/
var models = [
  createModel('CPM 💰', 'CPM', 'Google'),
  createModel('CPC 💸', 'CPC', 'Google'),
  createModel('SEM 🔥', 'SEM', 'Google'),
  createModel('GDN', 'GDN', 'Google'),
  createModel('YouTube', 'YouTube', 'Google'),
  createModel('SmartAds', 'SmartAds', 'Google'),
  createModel('Maps 🆕', 'Maps', 'Google'),
  createModel('Discovery 🆕', 'Discovery', 'Google'),
  createModel('Performance Max 🆕', 'Performance-Max', 'Google'),
  createModel('CPM 💰', 'CPM', 'Facebook'),
  createModel('CPC 💸', 'CPC', 'Facebook'),
  createModel('Post 🔥', 'Post', 'Facebook'),
  createModel('Story 🔥', 'Story', 'Facebook'),
  createModel('Video', 'Video', 'Facebook'),
  createModel('Swipeup', 'Swipeup', 'Facebook'),
  createModel('Marketplace 🔥', 'Marketplace', 'Facebook'),
  createModel('FormLeads 🔥', 'FormLeads', 'Facebook'),
  createModel('CPM 💰', 'CPM', 'Instagram'),
  createModel('CPC 💸', 'CPC', 'Instagram'),
  createModel('Post 🔥', 'Post', 'Instagram'),
  createModel('Story 🔥', 'Story', 'Instagram'),
  createModel('Video', 'Video', 'Instagram'),
  createModel('Swipeup', 'Swipeup', 'Instagram'),
  createModel('FormLeads 🔥', 'FormLeads', 'Instagram'),
  createModel('Tweet', 'Tweet', 'Twitter'),
  createModel('Display', 'Display', 'Twitter'),
  createModel('Video', 'Video', 'Twitter'),
  createModel('Video', 'Video', 'TikTok'),
  createModel('Seleb TikTok', 'Selebtok', 'TikTok'),
  createModel('Display', 'Display', 'Detik'),
  createModel('Artikel', 'Display', 'Detik'),
  createModel('Display', 'Display', 'Kompas'),
  createModel('Artikel', 'Display', 'Kompas'),
  createModel('Display', 'Display', 'OLX'),
  createModel('Artikel', 'Display', 'OLX'),
  createModel('SwipeUp', 'SwipeUp', 'Selebgram'),
  createModel('LinkBio', 'LinkBio', 'Selebgram'),
  createModel('Newsletter', 'Newsletter', 'Email'),
  createModel('Click', 'Click', 'Survey'),
  createModel('Artikel', 'Artikel', 'Forum'),
];

/**
 * Available configurations
 **/
var configurations = [
  createConfiguration('Paid', 'Paid', 'CPM'),
  createConfiguration('Paid', 'Paid', 'CPC'),
  createConfiguration('Paid', 'Paid', 'SEM'),
  createConfiguration('Paid', 'Paid', 'GDN'),
  createConfiguration('Paid', 'Paid', 'YouTube'),
  createConfiguration('Paid', 'Paid', 'SmartAds'),
  createConfiguration('Paid', 'Paid', 'Discovery'),
  createConfiguration('Paid', 'Paid', 'Performance-Max'),
  createConfiguration('Paid', 'Paid', 'Post'),
  createConfiguration('Paid', 'Paid', 'Story'),
  createConfiguration('Paid', 'Paid', 'Swipeup'),
  createConfiguration('Paid', 'Paid', 'FormLeads'),
  createConfiguration('Paid', 'Paid', 'Tweet'),
  createConfiguration('Paid', 'Paid', 'Display'),
  createConfiguration('Paid', 'Paid', 'Video'),
  createConfiguration('Paid', 'Paid', 'Selebtok'),
  createConfiguration('Paid', 'Paid', 'LinkBio'),
  createConfiguration('Paid', 'Paid', 'Newsletter'), 

  createConfiguration('Organic', 'Organic', 'Post'),
  createConfiguration('Organic', 'Organic', 'Story'),
  createConfiguration('Organic', 'Organic', 'Swipeup'),
  createConfiguration('Organic', 'Organic', 'FormLeads'),
  createConfiguration('Organic', 'Organic', 'Tweet'),
  createConfiguration('Organic', 'Organic', 'Display'),
  createConfiguration('Organic', 'Organic', 'Video'),
  createConfiguration('Organic', 'Organic', 'LinkBio'),
  createConfiguration('Organic', 'Organic', 'Newsletter'),
  
  createConfiguration('Affiliate 🆕', 'Affiliate', 'Post'),
  createConfiguration('Affiliate 🆕', 'Affiliate', 'Story'),
  createConfiguration('Affiliate 🆕', 'Affiliate', 'Swipeup'),
  createConfiguration('Affiliate 🆕', 'Affiliate', 'FormLeads'),
  createConfiguration('Affiliate 🆕', 'Affiliate', 'Tweet'),
  createConfiguration('Affiliate 🆕', 'Affiliate', 'Display'),
  createConfiguration('Affiliate 🆕', 'Affiliate', 'Video'),
  createConfiguration('Affiliate 🆕', 'Affiliate', 'Selebtok'),
  createConfiguration('Affiliate 🆕', 'Affiliate', 'LinkBio'),
  createConfiguration('Affiliate 🆕', 'Affiliate', 'Newsletter'),
];

/**
 * Updates models
 **/
function updateModels() {
  var selectedCar = carsSelect.value;
  var options = models.filter(function(model) {
    return model.car === selectedCar;
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
 * Adds options to car select
 **/
addOptions(carsSelect, cars);