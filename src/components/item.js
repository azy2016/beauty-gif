import React from "react"
import axios from "axios";
import Style from "../styles/item.module.css"

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false,
            likeNum: this.props.obj.like,

        }
    }

    componentDidMount() {
        const windowGlobal = typeof window !== 'undefined' && window;
        let like = windowGlobal.localStorage.getItem(`gif_${this.state.id}`);
        if (like !== null) {
            let likeNum = JSON.parse(like).like;
            if(likeNum < this.state.likeNum) {
                likeNum = this.state.likeNum;
            }
            this.setState({
                like: true,
                likeNum: likeNum
            })
        }
    }

    count(action) {
        axios({
            method: "POST",
            url: "https://api.like-gif.com",
            data: {
                action: action,
                obj: this.props.obj.id,
                app: 4
            },
            transformRequest: [function(data) {
                let ret = ''
                for(let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }
    handelLoad(e) {
        if (e.target.src === this.props.obj.src) {
            this.count(2);
        }
    }

    handelLike(e) {
        e.stopPropagation();
        let id = this.props.obj.id;
        let key = `gif_${id}`;
        const windowGlobal = typeof window !== 'undefined' && window;
        if(!this.state.like){
            let data = {
                id: this.state.id,
                like: this.state.likeNum
            };
            data.like++;
            windowGlobal.localStorage.setItem(key, JSON.stringify(data));
            this.setState({
                like: true,
                likeNum: data.like
            })
            this.count(1);
        }
    }

    render() {
        return (
            <div className={Style.item}>
                <p className={Style.title}><a href={`/gif/${this.props.obj.id}`}>{this.props.obj.title}</a></p>
                <div className={Style.content}>
                    <a href={`/gif/${this.props.obj.id}`}>
                    <img className="lazyload" src="https://p9.pstatp.com/large/pgc-image/aac1156d3a194a29886177f65807b142" 
                    data-src={this.props.obj.src} onLoad={(e) => this.handelLoad(e)} alt="妹子gif"></img></a>
                </div>
                <div className={Style.footer}>
                    <div>
                        <button className={`${Style.icon} ${Style.likeIcon} ${this.state.like ? Style.isLike:false}`}
                        onClick={(e) => this.handelLike(e)}
                        >{this.state.likeNum}</button>
                        <span className={`${Style.icon} ${Style.readIcon}`}>{this.props.obj.read}</span>
                    </div>
                    <div>
                        <span className={`${Style.icon} ${Style.dateIcon}`}>{this.props.obj.date}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item