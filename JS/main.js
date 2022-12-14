// Sidebar
const menuIteam = document.querySelectorAll('.menu_item');

// Messages
const MsgNoficatin = document.querySelector('#msg-notification');
const Msgs = document.querySelector(".messages");
const Msg = Msgs.querySelectorAll('.message');
const MsgSearch = document.querySelector('#msg_search');

// Theme
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize_theme');
const fontSize = document.querySelectorAll('.choose_size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose_color span')
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');



// Rermove active class to sidebar
const changeActiveItem = () => {
  menuIteam.forEach(item => {
    item.classList.remove('active');
  })
}

// Add active class to sidebar
menuIteam.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem()
    item.classList.add('active')
    if (item.id != 'notifications') {
      document.querySelector('.notification_popup').style.display = "none";
    } else {
      document.querySelector('.notification_popup').style.display = "block";
      document.querySelector('#notifications .nonotification_count').style.display = "none";
    }
  })
})

// Messages Search Chat function
const searchMsg = () => {
  const val = MsgSearch.value.toLowerCase();
  Msg.forEach(user => {
    let name = user.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = 'flex';
    } else {
      user.style.display = 'none';
    }
  })
}


// Messages Search Chat
MsgSearch.addEventListener('keyup', searchMsg)




// Messages
MsgNoficatin.addEventListener('click', () => {
  Msgs.style.boxShadow = '0 0 1rem var(--color-primary)'
  MsgNoficatin.querySelector('.nonotification_count').style.display= 'none'
  setTimeout(() => {
    Msgs.style.boxShadow = 'none'
  }, 3000)
});


// Theme Customization
// open model
const openTheModel = () => {
  themeModel.style.display = 'grid'
}

const closeTheModel = (e) => {
  if (e.target.classList.contains('customize_theme')) {
    themeModel.style.display = 'none'
  }
}
// close model
themeModel.addEventListener('click', closeTheModel);

theme.addEventListener('click', openTheModel);



// Fonsts

// remove active from font Size
const removeSizeSelector = () => {
  fontSize.forEach(size => {
    size.classList.remove('active');
  })
}

fontSize.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector()
    let fontSize;
    size.classList.toggle('active')
    if (size.classList.contains('font_size-1')) {
      fontSize = '10px';
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '5.4rem')
    } else if (size.classList.contains('font_size-2')) {
      fontSize = '13px';
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '-7rem')
    } else if (size.classList.contains('font_size-3')) {
      fontSize = '16px';
      root.style.setProperty('----sticky-top-left', '-2rem')
      root.style.setProperty('----sticky-top-right', '-17rem')
    } else if (size.classList.contains('font_size-4')) {
      fontSize = '19px';
      root.style.setProperty('----sticky-top-left', '-5rem')
      root.style.setProperty('----sticky-top-right', '-25rem')
    } else if (size.classList.contains('font_size-5')) {
      fontSize = '22px';
      root.style.setProperty('----sticky-top-left', '-12rem')
      root.style.setProperty('----sticky-top-right', '-35rem')
    } 
    // change font size of html
    document.querySelector('html').style.fontSize = fontSize
  })
})

const changeActiveActive = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active')
  })
}


// Change Primary Color
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primary;
    changeActiveActive();


    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
     }  else if (color.classList.contains('color-3')) {
      primaryHue = 352;
     }  else if (color.classList.contains('color-4')) {
      primaryHue = 152;
     }  else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add('active')
    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})

// Background
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness)
  root.style.setProperty('--white-color-lightness', whiteColorLightness)
  root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

Bg1.addEventListener('click', () => {
  // add active class
  Bg1.classList.add('active')

  // remove active class
  Bg2.classList.remove('active')
  Bg3.classList.remove('active')
  window.location.reload();
})

Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  // add active class
  Bg2.classList.add('active')

  // remove active class
  Bg1.classList.remove('active')
  Bg3.classList.remove('active')
  changeBG();
});

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  // add active class
  Bg3.classList.add('active')

  // remove active class
  Bg1.classList.remove('active')
  Bg2.classList.remove('active')
  changeBG();
})