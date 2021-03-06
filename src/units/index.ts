const unitsFuction = {
    install: (Vue: { prototype: any }) => {
        Object.defineProperties(Vue.prototype, {
            $UNITFUNCTION: {
                get: () => {
                    return unitsFuction
                }
            }
        })
    },
    getDate: () => {
        const d = new Date();
        const year = d.getFullYear() >= 10? d.getFullYear() : '0' + d.getFullYear();
        const month = d.getMonth() >= 10? d.getMonth() : '0' + d.getMonth();
        const day = d.getDate() >= 10? d.getDate() : '0' + d.getDate();
        const hours = d.getHours() >= 10? d.getHours() : '0' + d.getHours();
        const minutes = d.getMinutes() >= 10? d.getMinutes() : '0' + d.getMinutes();
        const seconds = d.getSeconds() >= 10? d.getSeconds() : '0' + d.getSeconds();
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
    warterMark: () => {
        const canvasDiv = document.getElementsByClassName('canvasDiv')[0];
        if (canvasDiv) {
            canvasDiv.remove()
        } 
        const textBecomeImg = (text: string, fontsize: number, fontcolor: string) => {
            const canvas = document.createElement('canvas');
            let $buHeight = 0;
            if(fontsize <= 32) {
                $buHeight = 99;
            } else if (fontsize > 32 && fontsize <= 60) {
                $buHeight = 2;
            } else if (fontsize > 60 && fontsize <= 80) {
                $buHeight = 4;
            } else if (fontsize > 80 && fontsize <= 100) {
                $buHeight = 6;
            } else if (fontsize > 100) {
                $buHeight = 10;
            }
            canvas.height = fontsize + $buHeight;
            const context: any = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width * 2, canvas.height);
            context.textAlign = 'center';
            canvas.width = 550;
            canvas.height = 180;
            context.fillStyle = fontcolor;
            context.font = fontsize + 'px Arial';
            context.textBaseline = 'middle';
            const canvasWidth = canvas.width / 100;
            context.fillText(text, canvasWidth, fontsize / 2);
            const dataUrl = canvas.toDataURL('image/png')
            return dataUrl
        }
        const name_text = unitsFuction.getDate() + ' ?????????';
        const shuitinDiv = document.createElement('div');
        shuitinDiv.className = 'canvasDiv';
        const divStyle = shuitinDiv.style;
        divStyle.position = 'fixed';
        divStyle.left = '-50px';
        divStyle.top = '-200px';
        divStyle.width = 'calc(150vw - 100px)';
        divStyle.height = 'calc(150vh - 100px)';
        divStyle.opacity = '0.2';
        divStyle.background = `url(${textBecomeImg(name_text, 24, 'gray')})`;
        divStyle.zIndex = '1000000000000';
        divStyle.transform = 'rotate(-30deg)';
        divStyle.pointerEvents = 'none';
        document.body.appendChild(shuitinDiv);
    },
    smallToBig: (value: any) => {
        const fraction = ['???', '???'];
        const bigWrite = ['???', '???', '???', '???', '???', '???', '???', '???', '???', '???'];
        const unit = [['???', '???', '???'], ['', '???', '???', '???']];
        const head = value < 0? '???' : '';
        value = Math.abs(value);
        let s ='';
        for(let i = 0; i < fraction.length; i++) {
            s += (bigWrite[Math.floor(value*10*Math.pow(10,i))% 10] + fraction[i]).replace(/???./, '')
        }
        s = s || '???'
        value = Math.floor(value);
        for(let i = 0; i < unit[0].length && value > 0; i++) {
            let p = '';
            for (let j = 0; j < unit[1].length && value > 0; j++) {
                p = fraction[value % 10] + unit[1][j] + p;
                value = Math.floor(value / 10)
            }
            s = p.replace(/(???.)*???$/, '').replace(/^$/, '???') + unit[0][i] + s;
        }
        return head + s.replace(/(???.)*??????/, '???').replace(/(???.)+/g, '???').replace(/^???$/, '?????????')
    },
    formatMoney: (num: any) => {
        let pat;
        if(num === 0) return '0.00';
        if(num) {
            if(typeof num === 'number') {
                pat = num.toString().split('.');
            } else {
                pat = num.split('.');
            }
            pat[0] = pat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            if(num.toString().indexOf('.') > -1){
                return pat.join('.')
            }
            return `${pat.join('.')}.00`
        }
        return num;
    },
    anyFunction: () => {
        return null
    }
}

export default unitsFuction

function getDate() {
    throw new Error("Function not implemented.");
}
