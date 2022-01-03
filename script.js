console.log('скрипт из файла scrips.js');
const getUser = async () => {
  try {
    const res = await fetch('vk.com');
    const data = await res.json();
  } catch (e) {
    console.log(e);
  }
};

getUser();
