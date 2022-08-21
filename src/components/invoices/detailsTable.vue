<template>
  <table>
    <thead>
      <tr>
        <th
          class="text-grey text-capitalize"
          v-for="header in tableHeaders"
          :key="header.id"
          scope="col"
          :width="header.id === 1 ? '50%' : 'auto'"
        >
          {{ header.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="item Name">
          <div class="mb-2">
            <q-input outlined v-model="formData.itemName" />
          </div>
          <q-input outlined v-model="formData.itemDescription" />
        </td>
        <td data-label="Hours">
          <q-input outlined v-model="formData.hours" />
        </td>

        <td data-label="Rate/hr">
          <q-input outlined prefix="$" v-model="formData.rate" />
        </td>
        <td data-label="Tax">
          <q-input outlined prefix="$" v-model="formData.tax" />
        </td>
        <td data-label="Line Total">
          <q-input
            outlined
            v-model="formData.lineTotal"
            type="text"
            prefix="$"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      tableHeaders: [
        {
          name: "Item Name",
          id: 1,
        },
        {
          name: "Hours",
          id: 2,
        },
        {
          name: "Rate/Hr",
          id: 3,
        },
        {
          name: "Tax",
          id: 4,
        },
        {
          name: "Line Total",
          id: 5,
        },
      ],
      formData: {
        itemName: "Payment Project - Monlight Mobile Design",
        itemDescription: "Description",
        hours: "120",
        rate: "40.00",
        tax: "0.00",
        lineTotal: "4,800.00",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
table {
  border-collapse: collapse;
  margin: 1rem 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  tr {
    padding: 0.35em;
  }

  th,
  td {
    padding: 0.625em;
    text-align: start;
    vertical-align: baseline;
  }

  th {
    font-size: 0.85em;
    border-bottom: 1px solid #ddd;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
}

.text-capitalize {
  text-transform: capitalize;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: flex;
    flex-direction: column;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    display: block;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
