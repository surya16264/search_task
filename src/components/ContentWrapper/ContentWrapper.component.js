import './ContentWrapper.style.scss';

export const ContentWrapper = (props) => {
    function renderContentWrapper() {
        const {
            children,
        } = props;

        return (
            <div className="ContentWrapper">
                { children }
            </div>
        );
    }

    return (
        <section>
            { renderContentWrapper() }
        </section>
    );
}

export default ContentWrapper;
