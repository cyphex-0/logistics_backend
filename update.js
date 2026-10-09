const fs = require('fs');
let code = fs.readFileSync('src/modules/shipment/shipment.repository.ts', 'utf-8');

code = code.replace(
  '        courier: { select: { id: true, name: true, phone: true } }\\n      }\\n    });',
  \        courier: { select: { id: true, name: true, phone: true } },
        payment: { select: { status: true, method: true } }
      }
    }).then(shipment => {
      if (!shipment) return null;
      const { payment, ...rest } = shipment as any;
      return {
        ...rest,
        paymentStatus: payment?.status || null,
        paymentMethod: payment?.method || null,
      };
    });\
);

code = code.replace(
  '          courier: { select: { name: true } }\\n        }\\n      })\\n    ]);\\n\\n    return { total, page, limit, data };',
  \          courier: { select: { name: true } },
          payment: { select: { status: true, method: true } }
        }
      })
    ]);

    const mappedData = data.map(shipment => {
      const { payment, ...rest } = shipment as any;
      return {
        ...rest,
        paymentStatus: payment?.status || null,
        paymentMethod: payment?.method || null,
      };
    });

    return { total, page, limit, data: mappedData };\
);

fs.writeFileSync('src/modules/shipment/shipment.repository.ts', code);
