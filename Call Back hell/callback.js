let value = 10
setTimeout(()=>{
    document.getElementById('call').innerText = value
    value--;
    setTimeout(()=>{
        document.getElementById('call').innerText = value
        value--;
        setTimeout(()=>{
            document.getElementById('call').innerText = value
            value--;
            setTimeout(()=>{
                document.getElementById('call').innerText = value
                value--;
                setTimeout(()=>{
                    document.getElementById('call').innerText = value
                    value--;
                    setTimeout(()=>{
                        document.getElementById('call').innerText = value
                        value--;
                        setTimeout(()=>{
                            document.getElementById('call').innerText = value
                            value--;
                            setTimeout(()=>{
                                document.getElementById('call').innerText = value
                                value--;
                                setTimeout(()=>{
                                    document.getElementById('call').innerText = value
                                    value--;
                                    setTimeout(()=>{
                                        document.getElementById('call').innerText = value
                                        value--;
                                        setTimeout(()=>{
                                            document.getElementById('call').innerText = 'Happy Independence Day'
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
})