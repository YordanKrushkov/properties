const notify = (id) => {
    
    return setTimeout(() => {
        document.getElementById(id).style.display = 'none'
    }, 2000)

}
export default notify