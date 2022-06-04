/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// import { cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';
import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';
import userEvent from '@testing-library/user-event';
import operate from './logic/operate';


// afterEach(cleanup)

test('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter>
      <App />
    </BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


test("testing the title", () => {
  render(<Calculator/>);
  const title = screen.getByTestId("mytitle");
  expect(title).toBeInTheDocument()
});

// Test links on click to the page component
// test calculate link
describe('when you click the calculate link', () => {
  it('should render Calculate page content', () => {
    render(
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    )
    userEvent.click(screen.getByRole('link', {  name: /calcultor/i}));
    expect(screen.getByRole('heading', {  name: /lets do some math/i})).toBeInTheDocument();
  })
})

// test Home link
describe('When you click the Home link', () => {
  it('should rende Home page content', () => {
    render(
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    )
    userEvent.click(screen.getByRole('link', {  name: /home/i}));
    expect(screen.getByText(/welcome to our page !/i)).toBeInTheDocument();
  })
})

// Test Quote link
describe('when you click Quote link', () => {
  it('should render Quote page content', () => {
    render(
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    )
    userEvent.click(screen.getByRole('link', {  name: /quotes/i}));
    // eslint-disable-next-line no-useless-escape
    expect(screen.getByText(  /mathematics is not about numbers equations, computations or algorithms it is about understanding \-william paul thurston/i  )).toBeInTheDocument();
  })
})

// Test for calculator operation ("+", "-", "x", "÷", "%")
describe('unit test operations', () => {
  test('5 + 5 = 10', () => {
    const operation = operate(5, 5, '+');
    expect(operation).toBe('10')
  })

  test('50 - 8 = 42', () => {
    const operation = operate(50, 8, '-');
    expect(operation).toBe('42');
  })

  test('2.5 x 0.005 = 0.0125', () => {
    const operation = operate(2.5, 0.005, 'x');
    expect(operation).toBe('0.0125')
  })

  test('5 ÷ 2 = 2.5', () => {
    const operation = operate(5, 2, '÷');
    expect(operation).toBe('2.5')
  })

  test('78 % 5 = 3', () => {
    const operation = operate(78, 5, '%');
    expect(operation).toBe('3')
  })
})