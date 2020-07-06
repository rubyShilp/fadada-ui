import Menu from "./../../util/components/common/menu.vue";
import Slip from "./../../util/components/common/slip.vue";
import Top from "./../../util/components/common/top.vue";
export default {
  data() {
    return {
      dataList: [
        {
          name: "房屋租赁合同-租赁合同",
          userName: "shenz2hen@fadada.com",
          dateTime: "2018-08-02",
          status: "待我签",
        },
        {
          name: "房屋租赁合同-租赁合同",
          userName: "shenz2hen@fadada.com",
          dateTime: "2018-08-02",
          status: "待我签",
        },
      ],
      showtab01: false,
      showcode: false,
      showpage: false,
      treeList: [
        {
          id: "l1_1",
          label: "一级节点1",
          children: [
            {
              label: "节点1-1",
              id: "l1_1_1",
              children: [],
            },
            {
              label: "节点1-2",
              id: "l1_1_2",
              children: [],
            },
            {
              label: "节点1-3",
              id: "l1_1_3",
            },
          ],
        },
        {
          label: "一级节点2",
          id: "l1_2",
          children: [
            {
              label: "节点2-1",
              id: "l1_2_1",
            },
          ],
        },
      ],
    };
  },
  components: {
    "v-menu": Menu,
    "v-slip": Slip,
    "v-top": Top,
  },
  created() {
    this.$nextTick(() => {
      // treeBox 元素的ref   value 绑定的node-key
      this.$refs.treeBox.setCurrentKey(this.treeList[0].id);
    });
  },
  methods: {
    handleCurrentChange(row) {
      console.log(row);
    },
    send(list) {
      console.log(list);
    },
  },
};
