import React from 'react';

const SlotBox = ({ isParked, slotName }) => {
    if (!isParked) {
        return (
            <div class="slot">
                <span>
                    <span>{slotName}</span><br />
                </span>
            </div>
        );
    } else {
        return (
            <div class="slot slot-not-free">
                <span><span>{slotName}</span> <br />
                    <i class="bi bi-car-front"></i>
                </span>
            </div>
        );
    }
};

export default SlotBox;