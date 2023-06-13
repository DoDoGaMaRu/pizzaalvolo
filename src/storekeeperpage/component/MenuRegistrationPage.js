import "../../index.css";
import './MenuRegistrationPage.css';

export default function MenuRegistration() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const payload = new FormData(form);

        fetch('http://202.31.202.34:443/menu/create', {
            method: 'POST',
            headers: {},
            body: payload,
        })
            .then(res => res.json())
            .then(data => console.log(data));
    };

    return (
        <div>
            <form id="form" name="saveForm" onSubmit={handleSubmit}>
                <input type="file" name="image" />
                <div>
                    카테고리
                    <input type="radio" name="category" value="장인" />장인
                    <input type="radio" name="category" value="달인" />달인
                    <input type="radio" name="category" value="명품" />명품
                </div>
                <div>
                    이름
                    <input type="text" name="name" />
                </div>
                <div>
                    가격
                    <input type="number" name="price" />
                </div>
                <button type="submit">업로드</button>
            </form>
        </div>
    );
}
