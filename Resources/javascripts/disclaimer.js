Titanium.include('../javascripts/application.js');
var win = Ti.UI.currentWindow;

var bgImage = Ti.UI.createImageView({
  top:0,
  left:0,
  url:'../images/back.png',
  height:'auto',
  width:'auto'
});
win.add(bgImage);

var scrollView = Ti.UI.createScrollView({
  top: 0,
  left: 0,
  contentHeight: 900,
  contentWidth: 320
});

var disclaimerLabel = Ti.UI.createLabel({
  top: 0,
  left: 10,
  width: 300,
  height: 800,
  color: '#fff',
	font:{fontSize:16, fontWeight:'normal'},
  text: "1) Do Not Touch anything you observe! Reporting means observing from a safe location. Do not take risk to yourself, others or the wildlife. Reporting is the act of sharing what you see. Please report critical information directly to the authorities. If you find oiled wildlife please call (866) 448-5816. If you find an oiled beach please report it at (866) 448-5816.\n\n" +
        "2) Data you submit, including your location will be public data. The information collected here via Oil Reporter will be shared back out to the public via a data feed on www.oilreporter.org. It is critical that you turn your location on (see video). Without it, we can't map where you took your picture. Your data will be housed at San Diego State University.\n\n" +
        "3) Personal privacy. Your personal information will not be collected on this application. We encourage thoughtful reporting. Data retrieved on this application will be monitored. As a reminder, your location and the data you submit will be made public.\n\n" +
        "If you at any time wish to contact CrisisCommons, please email us at oilreporter@crisiscommons.org\n\n" +
        "Privacy Statement (Link: www.crisiscommons.org/privacy)\n\nTerms of Service (www.crisiscommons.org/tos)"
});
scrollView.add(disclaimerLabel);

var tosButton = Ti.UI.createButton({
  width: 301,
  height: 57,
  top: 800,
  backgroundImage: '../images/button_dark_off.png',
  backgroundSelectedImage: '../images/button_dark_on.png',
  title: 'I accept'
});
tosButton.addEventListener('click', function() {
  Ti.App.fireEvent('remove_disclaimer');
});
scrollView.add(tosButton);

win.add(scrollView);
