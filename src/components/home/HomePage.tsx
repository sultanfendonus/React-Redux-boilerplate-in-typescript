import React from "react";
import {connect} from 'react-redux'
import {getAllPost} from '../../actions'


interface PostList {
    userId: number;
    id: number;
    title: string;
    body: string;
}

class HomePage extends React.Component<any, any> {
    componentDidMount(): void {
        this.props.getAllPost()
    }

    render() {
        if (!this.props.postList) {
            return (
                <div>
                    Loading ...
                </div>
            )
        }

        return this.props.postList.map((post: PostList) => {
            return (
                <div key={post.id}>{post.title}</div>
            )
        })
    }
}

const mapStateToProps = (state: any) => {
    return {
        postList: state.postReducer.postList
    }
}
export default connect(mapStateToProps, {getAllPost})(HomePage)