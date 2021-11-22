function TodoList(props) {
    const { children } = props;
    return (
        <section>
            {children}
        </section>
    )
}

export { TodoList}