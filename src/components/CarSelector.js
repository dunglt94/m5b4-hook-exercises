import {useState} from "react";

function CarSelector() {
    const carList = ['Toyota', 'Honda', 'Ford', 'BMW'];
    const colorList = ['Black', 'White', 'Blue'];

    const [selectedCar, setSelectedCar] = useState({
        car: carList[0],
        color: colorList[0]
    });

    const handleCarChange = (e) => {
        setSelectedCar(previousState => {
            return {...previousState, car: e.target.value}
        })
    };

    const handleColorChange = (e) => {
        setSelectedCar(previousState => {
            return {...previousState, color: e.target.value}
        })
    };

    const {car, color} = selectedCar;
    return (
        <div>
            <h1>Select your car</h1>
            <table>
                <tbody>
                <tr>
                    <td>Select a car</td>
                    <td>
                        <select onChange={handleCarChange}
                                id="car"
                                value={car}>
                            {carList.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Select a color</td>
                    <td>
                        <select onChange={handleColorChange}
                                id="color"
                                value={color}>
                            {colorList.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
            <h4>You select a {color} - {car}</h4>
        </div>
    )
}

export default CarSelector;