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
        const textBecomeImg = (text: string, fontsize: number, fontcolor: string | CanvasGradient | CanvasPattern | undefined) => {
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
            context?.clearRect(0, 0, canvas.width * 2, canvas.height);
            context.textAlign = 'center';
            canvas.width = 450;
            canvas.height = 200;
            context.fillStyle = fontcolor;
            context.font = fontsize + 'px Arial';
            context.textBaseline = 'middle';
            const canvasWidth = canvas.width / 99;
            context?.fillText(text, canvasWidth, fontsize / 2);
            const dataUrl = canvas.toDataURL('image/png')
            return dataUrl
        }
        const name_text = getDate() + '某某';
        const shuitinDiv = document.createElement('div');
        shuitinDiv.className = 'canvasDiv';
        const divStyle = shuitinDiv.style;
        divStyle.position = 'absolute';
        divStyle.left = '0';
        divStyle.top = '-60%';
        divStyle.width = '120%';
        divStyle.height = '200%';
        divStyle.opacity = '0.15';
        divStyle.background = `url(${textBecomeImg(name_text, 32, 'gray')})`;
        divStyle.zIndex = '1000';
        divStyle.transform = 'rotate(-30deg)';
        divStyle.pointerEvents = 'none';
        document.body.appendChild(shuitinDiv);
    },
    smallToBig: (value: any) => {
        const fraction = ['角', '分'];
        const bigWrite = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
        const head = value < 0? '负' : '';
        value = Math.abs(value);
        let s ='';
        for(let i = 0; i < fraction.length; i++) {
            s += (bigWrite[Math.floor(value*10*Math.pow(10,i))% 10] + fraction[i]).replace(/零./, '')
        }
        s = s || '整'
        value = Math.floor(value);
        for(let i = 0; i < unit[0].length && value > 0; i++) {
            let p = '';
            for (let j = 0; j < unit[1].length && value > 0; j++) {
                p = fraction[value % 10] + unit[1][j] + p;
                value = Math.floor(value / 10)
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整')
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
