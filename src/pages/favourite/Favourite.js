import React from 'react';
import "./favourite.scss";
import WeatherIcon from './../../components/weatherIcon/WeatherIcon';

function Favourite() {
    return (
            <div className="favourite-page">
            <div className="card">
            <div className="weather-icon">
                <svg height="512pt" viewBox="0 -1 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m488.171875 166.226562c0-14.125 25.589844-31.417968 22.109375-44.445312-3.601562-13.476562-34.515625-15.648438-41.34375-27.449219-6.921875-11.972656 6.578125-39.808593-3.136719-49.523437-9.714843-9.71875-37.554687 3.785156-49.523437-3.140625-11.800782-6.828125-13.972656-37.742188-27.453125-41.34375-13.027344-3.480469-30.320313 22.109375-44.445313 22.109375s-31.417968-25.589844-44.445312-22.109375c-13.476563 3.601562-15.648438 34.515625-27.449219 41.34375-11.972656 6.925781-39.808594-6.574219-49.523437 3.140625-9.714844 9.714844 3.785156 37.550781-3.140626 49.523437-6.828124 11.800781-37.742187 13.972657-41.34375 27.449219-3.480468 13.027344 22.109376 30.320312 22.109376 44.445312s-25.589844 31.421876-22.109376 44.445313c3.601563 13.480469 34.515626 15.652344 41.34375 27.453125 6.925782 11.96875-6.574218 39.808594 3.140626 49.523438 9.714843 9.714843 37.550781-3.789063 49.523437 3.136718 11.800781 6.828125 13.96875 37.742188 27.449219 41.34375 13.027344 3.480469 30.320312-22.109375 44.445312-22.109375s31.417969 25.589844 44.445313 22.109375c13.480469-3.601562 15.648437-34.515625 27.453125-41.34375 11.96875-6.925781 39.808594 6.578125 49.523437-3.136718 9.714844-9.71875-3.789062-37.554688 3.136719-49.527344 6.828125-11.796875 37.742188-13.96875 41.34375-27.449219 3.484375-13.027344-22.109375-30.320313-22.109375-44.445313zm0 0" fill="#ffee8c"/><path d="m455.386719 166.226562c0 56.070313-41.570313 102.429688-95.574219 109.941407-5.042969.703125-10.191406 1.0625-15.429688 1.0625-61.308593 0-111.011718-49.699219-111.011718-111.003907 0-61.308593 49.703125-111.007812 111.011718-111.007812 5.238282 0 10.386719.359375 15.429688 1.066406 54.003906 7.511719 95.574219 53.871094 95.574219 109.941406zm0 0" fill="#f28f44"/><path d="m455.386719 166.226562c0 56.070313-41.570313 102.429688-95.574219 109.941407-54.007812-7.511719-95.578125-53.875-95.578125-109.941407 0-56.070312 41.570313-102.429687 95.578125-109.941406 54.003906 7.511719 95.574219 53.871094 95.574219 109.941406zm0 0" fill="#ffd073"/><path d="m408.09375 321.625c0 37.882812-30.710938 68.59375-68.609375 68.59375h-248.265625c-50.371094 0-91.21875-40.832031-91.21875-91.21875 0-50.375 40.847656-91.21875 91.21875-91.21875 4.519531 0 8.964844.347656 13.316406.976562 20.601563-40.910156 62.964844-68.980468 111.910156-68.980468 59.222657 0 108.835938 41.117187 121.867188 96.355468 1.300781 5.511719 2.238281 11.164063 2.78125 16.921876v.011718c37.136719.851563 67 31.214844 67 68.558594zm0 0" fill="#d3ddea"/><path d="m259.96875 147.558594c-13.558594-5.035156-28.226562-7.777344-43.523438-7.777344-48.945312 0-91.296874 28.074219-111.910156 68.96875v.011719c-4.355468-.628907-8.796875-.976563-13.316406-.976563-50.386719 0-91.21875 40.84375-91.21875 91.21875 0 50.386719 40.832031 91.21875 91.21875 91.21875h44.089844c-45.402344 0-82.191406-36.800781-82.191406-82.191406 0-40.28125 28.972656-73.796875 67.230468-80.828125 3.785156-.707031 7.660156-1.144531 11.613282-1.300781 1.105468-.039063 2.226562-.066406 3.347656-.066406 14.757812 0 28.613281 3.890624 40.574218 10.714843-1.660156-11.578125-13.632812-22.425781-31.28125-31.167969 9.691407-32.777343 42.675782-63.175781 115.367188-57.824218zm0 0" fill="#84abc1"/><path d="m264.3125 385.703125c.496094.085937.789062.085937.835938.085937h-3.796876c.992188 0 1.976563-.03125 2.960938-.085937zm0 0" fill="#84abc1"/><path d="m512 453.875c0 30.636719-24.835938 55.476562-55.484375 55.476562h-200.785156c-40.738281 0-73.769531-33.023437-73.769531-73.773437 0-40.738281 33.03125-73.773437 73.769531-73.773437 3.65625 0 7.25.28125 10.769531.792968 16.664062-33.085937 50.925781-55.789062 90.507812-55.789062 47.894532 0 88.019532 33.25 98.558594 77.929687 1.050782 4.457031 1.8125 9.027344 2.25 13.683594v.007813c30.035156.6875 54.183594 25.246093 54.183594 55.445312zm0 0" fill="#d3ddea"/><path d="m392.207031 313.101562c-10.964843-4.070312-22.828125-6.289062-35.199219-6.289062-39.582031 0-73.835937 22.703125-90.507812 55.777344v.007812c-3.519531-.507812-7.113281-.789062-10.769531-.789062-40.75 0-73.769531 33.03125-73.769531 73.773437 0 40.75 33.019531 73.769531 73.769531 73.769531h35.660156c-36.71875 0-66.472656-29.761718-66.472656-66.472656 0-32.574218 23.429687-59.679687 54.371093-65.367187 3.0625-.574219 6.195313-.925781 9.394532-1.050781.894531-.03125 1.800781-.050782 2.707031-.050782 11.933594 0 23.140625 3.144532 32.8125 8.664063-1.34375-9.367188-11.023437-18.140625-25.300781-25.210938 7.839844-26.507812 34.515625-51.089843 93.304687-46.761719zm0 0" fill="#84abc1"/><g fill="#cc9236"><path d="m353.96875 150.019531c-3.164062 0-5.726562-2.5625-5.726562-5.726562v-6.875c0-3.164063 2.5625-5.726563 5.726562-5.726563s5.726562 2.5625 5.726562 5.726563v6.875c0 3.164062-2.5625 5.726562-5.726562 5.726562zm0 0"/><path d="m402.042969 150.019531c-3.160157 0-5.726563-2.5625-5.726563-5.726562v-6.875c0-3.164063 2.566406-5.726563 5.726563-5.726563 3.164062 0 5.730469 2.5625 5.730469 5.726563v6.875c0 3.164062-2.566407 5.726562-5.730469 5.726562zm0 0"/><path d="m379.332031 189.8125c-9.730469 0-18.875-3.789062-25.753906-10.667969-2.234375-2.238281-2.234375-5.863281.003906-8.101562 2.234375-2.238281 5.863281-2.234375 8.097657 0 4.714843 4.714843 10.984374 7.3125 17.648437 7.3125 6.667969 0 12.9375-2.597657 17.652344-7.3125 2.234375-2.234375 5.863281-2.234375 8.101562 0 2.234375 2.238281 2.234375 5.863281 0 8.101562-6.878906 6.878907-16.023437 10.667969-25.75 10.667969zm0 0"/></g></svg>
            </div>
            <span className="city-title">تهران</span>
            <span className="temp">15</span>
            <div className="weather">
                <div>
                    <span className="icon-down"></span>
                    <span className="min-temp">8</span>
                </div>
                <div>
                    <span className="icon-up"></span>
                    <span className="max-temp">19</span>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="weather-icon">
                <svg height="512pt" viewBox="0 -1 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m488.171875 166.226562c0-14.125 25.589844-31.417968 22.109375-44.445312-3.601562-13.476562-34.515625-15.648438-41.34375-27.449219-6.921875-11.972656 6.578125-39.808593-3.136719-49.523437-9.714843-9.71875-37.554687 3.785156-49.523437-3.140625-11.800782-6.828125-13.972656-37.742188-27.453125-41.34375-13.027344-3.480469-30.320313 22.109375-44.445313 22.109375s-31.417968-25.589844-44.445312-22.109375c-13.476563 3.601562-15.648438 34.515625-27.449219 41.34375-11.972656 6.925781-39.808594-6.574219-49.523437 3.140625-9.714844 9.714844 3.785156 37.550781-3.140626 49.523437-6.828124 11.800781-37.742187 13.972657-41.34375 27.449219-3.480468 13.027344 22.109376 30.320312 22.109376 44.445312s-25.589844 31.421876-22.109376 44.445313c3.601563 13.480469 34.515626 15.652344 41.34375 27.453125 6.925782 11.96875-6.574218 39.808594 3.140626 49.523438 9.714843 9.714843 37.550781-3.789063 49.523437 3.136718 11.800781 6.828125 13.96875 37.742188 27.449219 41.34375 13.027344 3.480469 30.320312-22.109375 44.445312-22.109375s31.417969 25.589844 44.445313 22.109375c13.480469-3.601562 15.648437-34.515625 27.453125-41.34375 11.96875-6.925781 39.808594 6.578125 49.523437-3.136718 9.714844-9.71875-3.789062-37.554688 3.136719-49.527344 6.828125-11.796875 37.742188-13.96875 41.34375-27.449219 3.484375-13.027344-22.109375-30.320313-22.109375-44.445313zm0 0" fill="#ffee8c"/><path d="m455.386719 166.226562c0 56.070313-41.570313 102.429688-95.574219 109.941407-5.042969.703125-10.191406 1.0625-15.429688 1.0625-61.308593 0-111.011718-49.699219-111.011718-111.003907 0-61.308593 49.703125-111.007812 111.011718-111.007812 5.238282 0 10.386719.359375 15.429688 1.066406 54.003906 7.511719 95.574219 53.871094 95.574219 109.941406zm0 0" fill="#f28f44"/><path d="m455.386719 166.226562c0 56.070313-41.570313 102.429688-95.574219 109.941407-54.007812-7.511719-95.578125-53.875-95.578125-109.941407 0-56.070312 41.570313-102.429687 95.578125-109.941406 54.003906 7.511719 95.574219 53.871094 95.574219 109.941406zm0 0" fill="#ffd073"/><path d="m408.09375 321.625c0 37.882812-30.710938 68.59375-68.609375 68.59375h-248.265625c-50.371094 0-91.21875-40.832031-91.21875-91.21875 0-50.375 40.847656-91.21875 91.21875-91.21875 4.519531 0 8.964844.347656 13.316406.976562 20.601563-40.910156 62.964844-68.980468 111.910156-68.980468 59.222657 0 108.835938 41.117187 121.867188 96.355468 1.300781 5.511719 2.238281 11.164063 2.78125 16.921876v.011718c37.136719.851563 67 31.214844 67 68.558594zm0 0" fill="#d3ddea"/><path d="m259.96875 147.558594c-13.558594-5.035156-28.226562-7.777344-43.523438-7.777344-48.945312 0-91.296874 28.074219-111.910156 68.96875v.011719c-4.355468-.628907-8.796875-.976563-13.316406-.976563-50.386719 0-91.21875 40.84375-91.21875 91.21875 0 50.386719 40.832031 91.21875 91.21875 91.21875h44.089844c-45.402344 0-82.191406-36.800781-82.191406-82.191406 0-40.28125 28.972656-73.796875 67.230468-80.828125 3.785156-.707031 7.660156-1.144531 11.613282-1.300781 1.105468-.039063 2.226562-.066406 3.347656-.066406 14.757812 0 28.613281 3.890624 40.574218 10.714843-1.660156-11.578125-13.632812-22.425781-31.28125-31.167969 9.691407-32.777343 42.675782-63.175781 115.367188-57.824218zm0 0" fill="#84abc1"/><path d="m264.3125 385.703125c.496094.085937.789062.085937.835938.085937h-3.796876c.992188 0 1.976563-.03125 2.960938-.085937zm0 0" fill="#84abc1"/><path d="m512 453.875c0 30.636719-24.835938 55.476562-55.484375 55.476562h-200.785156c-40.738281 0-73.769531-33.023437-73.769531-73.773437 0-40.738281 33.03125-73.773437 73.769531-73.773437 3.65625 0 7.25.28125 10.769531.792968 16.664062-33.085937 50.925781-55.789062 90.507812-55.789062 47.894532 0 88.019532 33.25 98.558594 77.929687 1.050782 4.457031 1.8125 9.027344 2.25 13.683594v.007813c30.035156.6875 54.183594 25.246093 54.183594 55.445312zm0 0" fill="#d3ddea"/><path d="m392.207031 313.101562c-10.964843-4.070312-22.828125-6.289062-35.199219-6.289062-39.582031 0-73.835937 22.703125-90.507812 55.777344v.007812c-3.519531-.507812-7.113281-.789062-10.769531-.789062-40.75 0-73.769531 33.03125-73.769531 73.773437 0 40.75 33.019531 73.769531 73.769531 73.769531h35.660156c-36.71875 0-66.472656-29.761718-66.472656-66.472656 0-32.574218 23.429687-59.679687 54.371093-65.367187 3.0625-.574219 6.195313-.925781 9.394532-1.050781.894531-.03125 1.800781-.050782 2.707031-.050782 11.933594 0 23.140625 3.144532 32.8125 8.664063-1.34375-9.367188-11.023437-18.140625-25.300781-25.210938 7.839844-26.507812 34.515625-51.089843 93.304687-46.761719zm0 0" fill="#84abc1"/><g fill="#cc9236"><path d="m353.96875 150.019531c-3.164062 0-5.726562-2.5625-5.726562-5.726562v-6.875c0-3.164063 2.5625-5.726563 5.726562-5.726563s5.726562 2.5625 5.726562 5.726563v6.875c0 3.164062-2.5625 5.726562-5.726562 5.726562zm0 0"/><path d="m402.042969 150.019531c-3.160157 0-5.726563-2.5625-5.726563-5.726562v-6.875c0-3.164063 2.566406-5.726563 5.726563-5.726563 3.164062 0 5.730469 2.5625 5.730469 5.726563v6.875c0 3.164062-2.566407 5.726562-5.730469 5.726562zm0 0"/><path d="m379.332031 189.8125c-9.730469 0-18.875-3.789062-25.753906-10.667969-2.234375-2.238281-2.234375-5.863281.003906-8.101562 2.234375-2.238281 5.863281-2.234375 8.097657 0 4.714843 4.714843 10.984374 7.3125 17.648437 7.3125 6.667969 0 12.9375-2.597657 17.652344-7.3125 2.234375-2.234375 5.863281-2.234375 8.101562 0 2.234375 2.238281 2.234375 5.863281 0 8.101562-6.878906 6.878907-16.023437 10.667969-25.75 10.667969zm0 0"/></g></svg>
            </div>
            <span className="city-title">تهران</span>
            <span className="temp">15</span>
            <div className="weather">
                <div>
                    <span className="icon-down"></span>
                    <span className="min-temp">8</span>
                </div>
                <div>
                    <span className="icon-up"></span>
                    <span className="max-temp">19</span>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="weather-icon">
                <svg height="512pt" viewBox="0 -1 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m488.171875 166.226562c0-14.125 25.589844-31.417968 22.109375-44.445312-3.601562-13.476562-34.515625-15.648438-41.34375-27.449219-6.921875-11.972656 6.578125-39.808593-3.136719-49.523437-9.714843-9.71875-37.554687 3.785156-49.523437-3.140625-11.800782-6.828125-13.972656-37.742188-27.453125-41.34375-13.027344-3.480469-30.320313 22.109375-44.445313 22.109375s-31.417968-25.589844-44.445312-22.109375c-13.476563 3.601562-15.648438 34.515625-27.449219 41.34375-11.972656 6.925781-39.808594-6.574219-49.523437 3.140625-9.714844 9.714844 3.785156 37.550781-3.140626 49.523437-6.828124 11.800781-37.742187 13.972657-41.34375 27.449219-3.480468 13.027344 22.109376 30.320312 22.109376 44.445312s-25.589844 31.421876-22.109376 44.445313c3.601563 13.480469 34.515626 15.652344 41.34375 27.453125 6.925782 11.96875-6.574218 39.808594 3.140626 49.523438 9.714843 9.714843 37.550781-3.789063 49.523437 3.136718 11.800781 6.828125 13.96875 37.742188 27.449219 41.34375 13.027344 3.480469 30.320312-22.109375 44.445312-22.109375s31.417969 25.589844 44.445313 22.109375c13.480469-3.601562 15.648437-34.515625 27.453125-41.34375 11.96875-6.925781 39.808594 6.578125 49.523437-3.136718 9.714844-9.71875-3.789062-37.554688 3.136719-49.527344 6.828125-11.796875 37.742188-13.96875 41.34375-27.449219 3.484375-13.027344-22.109375-30.320313-22.109375-44.445313zm0 0" fill="#ffee8c"/><path d="m455.386719 166.226562c0 56.070313-41.570313 102.429688-95.574219 109.941407-5.042969.703125-10.191406 1.0625-15.429688 1.0625-61.308593 0-111.011718-49.699219-111.011718-111.003907 0-61.308593 49.703125-111.007812 111.011718-111.007812 5.238282 0 10.386719.359375 15.429688 1.066406 54.003906 7.511719 95.574219 53.871094 95.574219 109.941406zm0 0" fill="#f28f44"/><path d="m455.386719 166.226562c0 56.070313-41.570313 102.429688-95.574219 109.941407-54.007812-7.511719-95.578125-53.875-95.578125-109.941407 0-56.070312 41.570313-102.429687 95.578125-109.941406 54.003906 7.511719 95.574219 53.871094 95.574219 109.941406zm0 0" fill="#ffd073"/><path d="m408.09375 321.625c0 37.882812-30.710938 68.59375-68.609375 68.59375h-248.265625c-50.371094 0-91.21875-40.832031-91.21875-91.21875 0-50.375 40.847656-91.21875 91.21875-91.21875 4.519531 0 8.964844.347656 13.316406.976562 20.601563-40.910156 62.964844-68.980468 111.910156-68.980468 59.222657 0 108.835938 41.117187 121.867188 96.355468 1.300781 5.511719 2.238281 11.164063 2.78125 16.921876v.011718c37.136719.851563 67 31.214844 67 68.558594zm0 0" fill="#d3ddea"/><path d="m259.96875 147.558594c-13.558594-5.035156-28.226562-7.777344-43.523438-7.777344-48.945312 0-91.296874 28.074219-111.910156 68.96875v.011719c-4.355468-.628907-8.796875-.976563-13.316406-.976563-50.386719 0-91.21875 40.84375-91.21875 91.21875 0 50.386719 40.832031 91.21875 91.21875 91.21875h44.089844c-45.402344 0-82.191406-36.800781-82.191406-82.191406 0-40.28125 28.972656-73.796875 67.230468-80.828125 3.785156-.707031 7.660156-1.144531 11.613282-1.300781 1.105468-.039063 2.226562-.066406 3.347656-.066406 14.757812 0 28.613281 3.890624 40.574218 10.714843-1.660156-11.578125-13.632812-22.425781-31.28125-31.167969 9.691407-32.777343 42.675782-63.175781 115.367188-57.824218zm0 0" fill="#84abc1"/><path d="m264.3125 385.703125c.496094.085937.789062.085937.835938.085937h-3.796876c.992188 0 1.976563-.03125 2.960938-.085937zm0 0" fill="#84abc1"/><path d="m512 453.875c0 30.636719-24.835938 55.476562-55.484375 55.476562h-200.785156c-40.738281 0-73.769531-33.023437-73.769531-73.773437 0-40.738281 33.03125-73.773437 73.769531-73.773437 3.65625 0 7.25.28125 10.769531.792968 16.664062-33.085937 50.925781-55.789062 90.507812-55.789062 47.894532 0 88.019532 33.25 98.558594 77.929687 1.050782 4.457031 1.8125 9.027344 2.25 13.683594v.007813c30.035156.6875 54.183594 25.246093 54.183594 55.445312zm0 0" fill="#d3ddea"/><path d="m392.207031 313.101562c-10.964843-4.070312-22.828125-6.289062-35.199219-6.289062-39.582031 0-73.835937 22.703125-90.507812 55.777344v.007812c-3.519531-.507812-7.113281-.789062-10.769531-.789062-40.75 0-73.769531 33.03125-73.769531 73.773437 0 40.75 33.019531 73.769531 73.769531 73.769531h35.660156c-36.71875 0-66.472656-29.761718-66.472656-66.472656 0-32.574218 23.429687-59.679687 54.371093-65.367187 3.0625-.574219 6.195313-.925781 9.394532-1.050781.894531-.03125 1.800781-.050782 2.707031-.050782 11.933594 0 23.140625 3.144532 32.8125 8.664063-1.34375-9.367188-11.023437-18.140625-25.300781-25.210938 7.839844-26.507812 34.515625-51.089843 93.304687-46.761719zm0 0" fill="#84abc1"/><g fill="#cc9236"><path d="m353.96875 150.019531c-3.164062 0-5.726562-2.5625-5.726562-5.726562v-6.875c0-3.164063 2.5625-5.726563 5.726562-5.726563s5.726562 2.5625 5.726562 5.726563v6.875c0 3.164062-2.5625 5.726562-5.726562 5.726562zm0 0"/><path d="m402.042969 150.019531c-3.160157 0-5.726563-2.5625-5.726563-5.726562v-6.875c0-3.164063 2.566406-5.726563 5.726563-5.726563 3.164062 0 5.730469 2.5625 5.730469 5.726563v6.875c0 3.164062-2.566407 5.726562-5.730469 5.726562zm0 0"/><path d="m379.332031 189.8125c-9.730469 0-18.875-3.789062-25.753906-10.667969-2.234375-2.238281-2.234375-5.863281.003906-8.101562 2.234375-2.238281 5.863281-2.234375 8.097657 0 4.714843 4.714843 10.984374 7.3125 17.648437 7.3125 6.667969 0 12.9375-2.597657 17.652344-7.3125 2.234375-2.234375 5.863281-2.234375 8.101562 0 2.234375 2.238281 2.234375 5.863281 0 8.101562-6.878906 6.878907-16.023437 10.667969-25.75 10.667969zm0 0"/></g></svg>
            </div>
            <span className="city-title">تهران</span>
            <span className="temp">15</span>
            <div className="weather">
                <div>
                    <span className="icon-down"></span>
                    <span className="min-temp">8</span>
                </div>
                <div>
                    <span className="icon-up"></span>
                    <span className="max-temp">19</span>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="weather-icon">
                <svg height="512pt" viewBox="0 -1 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m488.171875 166.226562c0-14.125 25.589844-31.417968 22.109375-44.445312-3.601562-13.476562-34.515625-15.648438-41.34375-27.449219-6.921875-11.972656 6.578125-39.808593-3.136719-49.523437-9.714843-9.71875-37.554687 3.785156-49.523437-3.140625-11.800782-6.828125-13.972656-37.742188-27.453125-41.34375-13.027344-3.480469-30.320313 22.109375-44.445313 22.109375s-31.417968-25.589844-44.445312-22.109375c-13.476563 3.601562-15.648438 34.515625-27.449219 41.34375-11.972656 6.925781-39.808594-6.574219-49.523437 3.140625-9.714844 9.714844 3.785156 37.550781-3.140626 49.523437-6.828124 11.800781-37.742187 13.972657-41.34375 27.449219-3.480468 13.027344 22.109376 30.320312 22.109376 44.445312s-25.589844 31.421876-22.109376 44.445313c3.601563 13.480469 34.515626 15.652344 41.34375 27.453125 6.925782 11.96875-6.574218 39.808594 3.140626 49.523438 9.714843 9.714843 37.550781-3.789063 49.523437 3.136718 11.800781 6.828125 13.96875 37.742188 27.449219 41.34375 13.027344 3.480469 30.320312-22.109375 44.445312-22.109375s31.417969 25.589844 44.445313 22.109375c13.480469-3.601562 15.648437-34.515625 27.453125-41.34375 11.96875-6.925781 39.808594 6.578125 49.523437-3.136718 9.714844-9.71875-3.789062-37.554688 3.136719-49.527344 6.828125-11.796875 37.742188-13.96875 41.34375-27.449219 3.484375-13.027344-22.109375-30.320313-22.109375-44.445313zm0 0" fill="#ffee8c"/><path d="m455.386719 166.226562c0 56.070313-41.570313 102.429688-95.574219 109.941407-5.042969.703125-10.191406 1.0625-15.429688 1.0625-61.308593 0-111.011718-49.699219-111.011718-111.003907 0-61.308593 49.703125-111.007812 111.011718-111.007812 5.238282 0 10.386719.359375 15.429688 1.066406 54.003906 7.511719 95.574219 53.871094 95.574219 109.941406zm0 0" fill="#f28f44"/><path d="m455.386719 166.226562c0 56.070313-41.570313 102.429688-95.574219 109.941407-54.007812-7.511719-95.578125-53.875-95.578125-109.941407 0-56.070312 41.570313-102.429687 95.578125-109.941406 54.003906 7.511719 95.574219 53.871094 95.574219 109.941406zm0 0" fill="#ffd073"/><path d="m408.09375 321.625c0 37.882812-30.710938 68.59375-68.609375 68.59375h-248.265625c-50.371094 0-91.21875-40.832031-91.21875-91.21875 0-50.375 40.847656-91.21875 91.21875-91.21875 4.519531 0 8.964844.347656 13.316406.976562 20.601563-40.910156 62.964844-68.980468 111.910156-68.980468 59.222657 0 108.835938 41.117187 121.867188 96.355468 1.300781 5.511719 2.238281 11.164063 2.78125 16.921876v.011718c37.136719.851563 67 31.214844 67 68.558594zm0 0" fill="#d3ddea"/><path d="m259.96875 147.558594c-13.558594-5.035156-28.226562-7.777344-43.523438-7.777344-48.945312 0-91.296874 28.074219-111.910156 68.96875v.011719c-4.355468-.628907-8.796875-.976563-13.316406-.976563-50.386719 0-91.21875 40.84375-91.21875 91.21875 0 50.386719 40.832031 91.21875 91.21875 91.21875h44.089844c-45.402344 0-82.191406-36.800781-82.191406-82.191406 0-40.28125 28.972656-73.796875 67.230468-80.828125 3.785156-.707031 7.660156-1.144531 11.613282-1.300781 1.105468-.039063 2.226562-.066406 3.347656-.066406 14.757812 0 28.613281 3.890624 40.574218 10.714843-1.660156-11.578125-13.632812-22.425781-31.28125-31.167969 9.691407-32.777343 42.675782-63.175781 115.367188-57.824218zm0 0" fill="#84abc1"/><path d="m264.3125 385.703125c.496094.085937.789062.085937.835938.085937h-3.796876c.992188 0 1.976563-.03125 2.960938-.085937zm0 0" fill="#84abc1"/><path d="m512 453.875c0 30.636719-24.835938 55.476562-55.484375 55.476562h-200.785156c-40.738281 0-73.769531-33.023437-73.769531-73.773437 0-40.738281 33.03125-73.773437 73.769531-73.773437 3.65625 0 7.25.28125 10.769531.792968 16.664062-33.085937 50.925781-55.789062 90.507812-55.789062 47.894532 0 88.019532 33.25 98.558594 77.929687 1.050782 4.457031 1.8125 9.027344 2.25 13.683594v.007813c30.035156.6875 54.183594 25.246093 54.183594 55.445312zm0 0" fill="#d3ddea"/><path d="m392.207031 313.101562c-10.964843-4.070312-22.828125-6.289062-35.199219-6.289062-39.582031 0-73.835937 22.703125-90.507812 55.777344v.007812c-3.519531-.507812-7.113281-.789062-10.769531-.789062-40.75 0-73.769531 33.03125-73.769531 73.773437 0 40.75 33.019531 73.769531 73.769531 73.769531h35.660156c-36.71875 0-66.472656-29.761718-66.472656-66.472656 0-32.574218 23.429687-59.679687 54.371093-65.367187 3.0625-.574219 6.195313-.925781 9.394532-1.050781.894531-.03125 1.800781-.050782 2.707031-.050782 11.933594 0 23.140625 3.144532 32.8125 8.664063-1.34375-9.367188-11.023437-18.140625-25.300781-25.210938 7.839844-26.507812 34.515625-51.089843 93.304687-46.761719zm0 0" fill="#84abc1"/><g fill="#cc9236"><path d="m353.96875 150.019531c-3.164062 0-5.726562-2.5625-5.726562-5.726562v-6.875c0-3.164063 2.5625-5.726563 5.726562-5.726563s5.726562 2.5625 5.726562 5.726563v6.875c0 3.164062-2.5625 5.726562-5.726562 5.726562zm0 0"/><path d="m402.042969 150.019531c-3.160157 0-5.726563-2.5625-5.726563-5.726562v-6.875c0-3.164063 2.566406-5.726563 5.726563-5.726563 3.164062 0 5.730469 2.5625 5.730469 5.726563v6.875c0 3.164062-2.566407 5.726562-5.730469 5.726562zm0 0"/><path d="m379.332031 189.8125c-9.730469 0-18.875-3.789062-25.753906-10.667969-2.234375-2.238281-2.234375-5.863281.003906-8.101562 2.234375-2.238281 5.863281-2.234375 8.097657 0 4.714843 4.714843 10.984374 7.3125 17.648437 7.3125 6.667969 0 12.9375-2.597657 17.652344-7.3125 2.234375-2.234375 5.863281-2.234375 8.101562 0 2.234375 2.238281 2.234375 5.863281 0 8.101562-6.878906 6.878907-16.023437 10.667969-25.75 10.667969zm0 0"/></g></svg>
            </div>
            <span className="city-title">تهران</span>
            <span className="temp">15</span>
            <div className="weather">
                <div>
                    <span className="icon-down"></span>
                    <span className="min-temp">8</span>
                </div>
                <div>
                    <span className="icon-up"></span>
                    <span className="max-temp">19</span>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="weather-icon">
                <svg height="512pt" viewBox="0 -1 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m488.171875 166.226562c0-14.125 25.589844-31.417968 22.109375-44.445312-3.601562-13.476562-34.515625-15.648438-41.34375-27.449219-6.921875-11.972656 6.578125-39.808593-3.136719-49.523437-9.714843-9.71875-37.554687 3.785156-49.523437-3.140625-11.800782-6.828125-13.972656-37.742188-27.453125-41.34375-13.027344-3.480469-30.320313 22.109375-44.445313 22.109375s-31.417968-25.589844-44.445312-22.109375c-13.476563 3.601562-15.648438 34.515625-27.449219 41.34375-11.972656 6.925781-39.808594-6.574219-49.523437 3.140625-9.714844 9.714844 3.785156 37.550781-3.140626 49.523437-6.828124 11.800781-37.742187 13.972657-41.34375 27.449219-3.480468 13.027344 22.109376 30.320312 22.109376 44.445312s-25.589844 31.421876-22.109376 44.445313c3.601563 13.480469 34.515626 15.652344 41.34375 27.453125 6.925782 11.96875-6.574218 39.808594 3.140626 49.523438 9.714843 9.714843 37.550781-3.789063 49.523437 3.136718 11.800781 6.828125 13.96875 37.742188 27.449219 41.34375 13.027344 3.480469 30.320312-22.109375 44.445312-22.109375s31.417969 25.589844 44.445313 22.109375c13.480469-3.601562 15.648437-34.515625 27.453125-41.34375 11.96875-6.925781 39.808594 6.578125 49.523437-3.136718 9.714844-9.71875-3.789062-37.554688 3.136719-49.527344 6.828125-11.796875 37.742188-13.96875 41.34375-27.449219 3.484375-13.027344-22.109375-30.320313-22.109375-44.445313zm0 0" fill="#ffee8c"/><path d="m455.386719 166.226562c0 56.070313-41.570313 102.429688-95.574219 109.941407-5.042969.703125-10.191406 1.0625-15.429688 1.0625-61.308593 0-111.011718-49.699219-111.011718-111.003907 0-61.308593 49.703125-111.007812 111.011718-111.007812 5.238282 0 10.386719.359375 15.429688 1.066406 54.003906 7.511719 95.574219 53.871094 95.574219 109.941406zm0 0" fill="#f28f44"/><path d="m455.386719 166.226562c0 56.070313-41.570313 102.429688-95.574219 109.941407-54.007812-7.511719-95.578125-53.875-95.578125-109.941407 0-56.070312 41.570313-102.429687 95.578125-109.941406 54.003906 7.511719 95.574219 53.871094 95.574219 109.941406zm0 0" fill="#ffd073"/><path d="m408.09375 321.625c0 37.882812-30.710938 68.59375-68.609375 68.59375h-248.265625c-50.371094 0-91.21875-40.832031-91.21875-91.21875 0-50.375 40.847656-91.21875 91.21875-91.21875 4.519531 0 8.964844.347656 13.316406.976562 20.601563-40.910156 62.964844-68.980468 111.910156-68.980468 59.222657 0 108.835938 41.117187 121.867188 96.355468 1.300781 5.511719 2.238281 11.164063 2.78125 16.921876v.011718c37.136719.851563 67 31.214844 67 68.558594zm0 0" fill="#d3ddea"/><path d="m259.96875 147.558594c-13.558594-5.035156-28.226562-7.777344-43.523438-7.777344-48.945312 0-91.296874 28.074219-111.910156 68.96875v.011719c-4.355468-.628907-8.796875-.976563-13.316406-.976563-50.386719 0-91.21875 40.84375-91.21875 91.21875 0 50.386719 40.832031 91.21875 91.21875 91.21875h44.089844c-45.402344 0-82.191406-36.800781-82.191406-82.191406 0-40.28125 28.972656-73.796875 67.230468-80.828125 3.785156-.707031 7.660156-1.144531 11.613282-1.300781 1.105468-.039063 2.226562-.066406 3.347656-.066406 14.757812 0 28.613281 3.890624 40.574218 10.714843-1.660156-11.578125-13.632812-22.425781-31.28125-31.167969 9.691407-32.777343 42.675782-63.175781 115.367188-57.824218zm0 0" fill="#84abc1"/><path d="m264.3125 385.703125c.496094.085937.789062.085937.835938.085937h-3.796876c.992188 0 1.976563-.03125 2.960938-.085937zm0 0" fill="#84abc1"/><path d="m512 453.875c0 30.636719-24.835938 55.476562-55.484375 55.476562h-200.785156c-40.738281 0-73.769531-33.023437-73.769531-73.773437 0-40.738281 33.03125-73.773437 73.769531-73.773437 3.65625 0 7.25.28125 10.769531.792968 16.664062-33.085937 50.925781-55.789062 90.507812-55.789062 47.894532 0 88.019532 33.25 98.558594 77.929687 1.050782 4.457031 1.8125 9.027344 2.25 13.683594v.007813c30.035156.6875 54.183594 25.246093 54.183594 55.445312zm0 0" fill="#d3ddea"/><path d="m392.207031 313.101562c-10.964843-4.070312-22.828125-6.289062-35.199219-6.289062-39.582031 0-73.835937 22.703125-90.507812 55.777344v.007812c-3.519531-.507812-7.113281-.789062-10.769531-.789062-40.75 0-73.769531 33.03125-73.769531 73.773437 0 40.75 33.019531 73.769531 73.769531 73.769531h35.660156c-36.71875 0-66.472656-29.761718-66.472656-66.472656 0-32.574218 23.429687-59.679687 54.371093-65.367187 3.0625-.574219 6.195313-.925781 9.394532-1.050781.894531-.03125 1.800781-.050782 2.707031-.050782 11.933594 0 23.140625 3.144532 32.8125 8.664063-1.34375-9.367188-11.023437-18.140625-25.300781-25.210938 7.839844-26.507812 34.515625-51.089843 93.304687-46.761719zm0 0" fill="#84abc1"/><g fill="#cc9236"><path d="m353.96875 150.019531c-3.164062 0-5.726562-2.5625-5.726562-5.726562v-6.875c0-3.164063 2.5625-5.726563 5.726562-5.726563s5.726562 2.5625 5.726562 5.726563v6.875c0 3.164062-2.5625 5.726562-5.726562 5.726562zm0 0"/><path d="m402.042969 150.019531c-3.160157 0-5.726563-2.5625-5.726563-5.726562v-6.875c0-3.164063 2.566406-5.726563 5.726563-5.726563 3.164062 0 5.730469 2.5625 5.730469 5.726563v6.875c0 3.164062-2.566407 5.726562-5.730469 5.726562zm0 0"/><path d="m379.332031 189.8125c-9.730469 0-18.875-3.789062-25.753906-10.667969-2.234375-2.238281-2.234375-5.863281.003906-8.101562 2.234375-2.238281 5.863281-2.234375 8.097657 0 4.714843 4.714843 10.984374 7.3125 17.648437 7.3125 6.667969 0 12.9375-2.597657 17.652344-7.3125 2.234375-2.234375 5.863281-2.234375 8.101562 0 2.234375 2.238281 2.234375 5.863281 0 8.101562-6.878906 6.878907-16.023437 10.667969-25.75 10.667969zm0 0"/></g></svg>
            </div>
            <span className="city-title">تهران</span>
            <span className="temp">15</span>
            <div className="weather">
                <div>
                    <span className="icon-down"></span>
                    <span className="min-temp">8</span>
                </div>
                <div>
                    <span className="icon-up"></span>
                    <span className="max-temp">19</span>
                </div>
            </div>
        </div>
            </div>
    )
}

export default Favourite;