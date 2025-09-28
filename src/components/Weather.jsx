const Weather = ({ temperature }) => {
    if (temperature < 15) {
        return <h1>It's cold Outside</h1>
    } else if (temperature >= 15 && temperature <= 25) {
        return <h1>It's nice outside</h1>
    } else {
        return <h1>It's hot today</h1>
    }
}

export default Weather;