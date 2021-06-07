let n = 1
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/page${n+1}')
    request.onreadystatechange=()=>{
        if (request.readyState === 4){
            if (request.status>=200 && request.status < 300){
                const array = JSON.parse(request.response)
                array.forEach(item=>{
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
                n+=1
            }else {
                alert('加载失败')
            }
        }
    }
    request.send()
}

const request = new XMLHttpRequest()
request.open('GET',"/style.css")
request.onload=()=>{
    const style = document.createElement('style')
    style.innerHTML = request.response
    document.head.appendChild(style)
}
request.onerror=()=>{
    console.log('失败')
}
request.send()

const request = new XMLHttpRequest()
request.open('GET','/2.js')
request.onload=()=>{
    const scrip = document.createElement('script')
    scrip.innerHTML = request.response
    document.body.appendChild(scrip)
}
request.onerror=()=>{
    console.log('失败')
}
request.send()

const request = new XMLHttpRequest()
request.open('GET','/3.html')
request.onreadystatechange=()=>{
    console.log(request.readyState)
    if (request.readyState === 4){
        if (request.status>=200 && request.status < 300){  //一般在此区间均为成功
            console.log('加载成功')
        }else {
            alert('加载失败')
        }
    }
}
request.send()

const request = new XMLHttpRequest()
request.open('GET','/4.xml')
request.onreadystatechange=()=>{
    console.log(request.readyState)
    if (request.readyState === 4){
        if (request.status>=200 && request.status < 300){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }else {
            alert('加载失败')
        }
    }
}
request.send()

const request = new XMLHttpRequest()
request.open('GET','/5.json')
request.onreadystatechange=()=>{
    console.log(request.readyState)
    if (request.readyState === 4){
        if (request.status>=200 && request.status < 300){
            const object = JSON.parse(request.response)
            console.log(object)
        }else {
            alert('加载失败')
        }
    }
}
request.send()