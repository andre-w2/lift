export const warning = (error) => {
    const alert = document.createElement('div');
    alert.className = 'alert alert-warning mt-3'
    alert.innerHTML = `<p>${error}</p>`

    document.body.append(alert);

    setTimeout(() => alert.remove() , 4000)
}

export const show = (data) => {
    const alert = document.createElement('div');
    alert.className = 'alert alert-success mt-3'
    alert.innerHTML = `<p>${data}</p>`

    document.body.append(alert);

    setTimeout(() => alert.remove() , 4000)
}

