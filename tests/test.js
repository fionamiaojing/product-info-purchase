import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { configure } from 'enzyme';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from '../client/components/App.jsx';
import Price from '../client/components/Price.jsx';
import Selection from '../client/components/Selection.jsx';
import SelectionEntry from '../client/components/SelectionEntry.jsx';
import Overview from '../client/components/Overview.jsx';

import data from './testData.js';

configure({ adapter: new Adapter() });

describe('<App />', () => {

    test('it shoud accept a pass-in props', () => {
        const pid = 1001;
        const wrapper = mount(<App pid={pid}/>);
        expect(wrapper.props().pid).toEqual(1001);
    });

    test('should rendering the component', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    const wrapper = shallow(<App />);

    wrapper.instance().setState({
        group:  data.group
    });

    wrapper.instance().setState({
        items:  data.items
    });

    test('should rendering correct data', () => {
      expect(wrapper.instance().state.group.fake_id).toEqual(1001);
    });

    test('it should detect user selection', () => {
      const quantity = 2;
      const options = {
        "color": "Flesh",
        "size": "5.5",
      };
      wrapper.instance().detectSelection(quantity, options);
      expect(wrapper.instance().state.quantity).toEqual(2);
      expect(wrapper.instance().state.selectedItemId).toEqual(
        '5b135ecbdaf6651723ee8b1c');
    });

});

describe('<Price />', () => {
    let originalPrice = {
        41: true,
    };

    let discountedPrice = {
        36: true,
    };

    const wrapper = mount(
        <Price 
            originalPrice={originalPrice}
            discountedPrice={discountedPrice}
        />
    );
    test('should rendering the component', () => {
        expect(wrapper.find('#price')).toHaveLength(1);
    });

    test('it should display the correct priceTag', () => {
        const component = renderer.create(
            <Price 
            originalPrice={originalPrice}
            discountedPrice={discountedPrice}
            />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });
});

describe('<SelectionEntry />', () => {
    let option = {
        color: ['red', 'black', 'white']
    };
    
    test('it should display the correct options of colors', () => {
        const component = renderer.create(
            <SelectionEntry 
            option={option}/>
        );
    
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('it should call handleSelect when option is selected', () => {
        const handleSelect = jest.fn();
        const wrapper = mount(
            <SelectionEntry 
            option={option}
            handleSelect={handleSelect}/>
        );
        const button = wrapper.find('#optionSelect');
        button.simulate('change');
        expect(handleSelect).toHaveBeenCalledTimes(1);
    });
});

describe('<Selection />', () => {
    const items = data.items;
    const category = 'Shoes';

    const wrapper = mount(
        <Selection
            items={items}
            category={category}
        />
    );

    test('it should render the correct number of options', () => {
        const numberOfOptions = wrapper.find('#selections').children();
        expect(numberOfOptions.length).toEqual(3);
    });

    test('it should display the correct options for all properties', () => {
        const component = renderer.create(
            <Selection
                items={items}
                category={category}
            />
        );
    
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<Overview />', () => {
    let info = {
        overview: {
            "material": "Some kind of material",
            "gift_message": true,
            "made_to_order": true,
            "handmade": true
        },
        reviews: 900,
        favorite: 300
    };

    test('it should display the correct information', () => {
        const component = renderer.create(
            <Overview
                info={info}
            />
        );
    
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});