const dashpage = async () => {
    document.location.replace('/dashboard');
};

document.querySelector('#dashboard').addEventListener('click', dashpage);