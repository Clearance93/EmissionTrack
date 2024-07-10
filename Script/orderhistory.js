document.addEventListener('DOMContentLoaded', function() {
    const orders = [
        { orderId: '001', date: '2023-06-21', items: 'Item 1, Item 2', total: 'R100', status: 'Delivered' },
        { orderId: '002', date: '2023-06-20', items: 'Item 3, Item 4', total: 'R200', status: 'Shipped' },
        { orderId: '003', date: '2023-06-19', items: 'Item 5, Item 6', total: 'R150', status: 'Pending' },
        { orderId: '004', date: '2023-07-05', items: 'Item 7, Item 8', total: 'R100', status: 'Pending' },
        { orderId: '005', date: '2023-07-09', items: 'Item 9, Item 10', total: 'R300', status: 'pending' },
        { orderId: '006', date: '2023-07-15', items: 'Item 11, Item 12', total: 'R270', status: 'Pending' },
        { orderId: '007', date: '2023-07-21', items: 'Item 13, Item 14', total: 'R310', status: 'Delivered' },
        { orderId: '008', date: '2023-07-27', items: 'Item 15, Item 16', total: 'R120', status: 'Delivered' },
        { orderId: '009', date: '2023-07-30', items: 'Item 17, Item 18', total: 'R150', status: 'Delivered' },
        { orderId: '0010', date: '2023-08-05', items: 'Item 19, Item 20', total: 'R100', status: 'Shipped' }
    ];

    const orderTableBody = document.getElementById('orderTableBody');

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>${order.date}</td>
            <td>${order.items}</td>
            <td>${order.total}</td>
            <td>${order.status}</td>
        `;
        orderTableBody.appendChild(row);
    });
});
