
export default props => {
    const elseChild = props.children.filter(child => child.type && child.type.name === 'Else')[0]

    const ifChildren = props.children.filter(child => child !== elseChild)

    if(props.test) {
        return ifChildren
    }

    if(elseChild) return elseChild

}

export const Else = props => props.children