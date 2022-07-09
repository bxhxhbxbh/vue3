<template>
    <div id="el_main" ref="el_main"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { InitData } from "@/types/travel";
import * as echarts from 'echarts';
import mapAreaList from '@/json/mapAreaList.json'
import { travelDataFn } from '@/api'

export default defineComponent({
  name: 'MapView',
  setup() {
    const data: any = reactive(new InitData())
    onMounted(() => {
      travelDataFn().then(res => {
        data.points = res.data.points;
        data.linesData = res.data.linesData;
        const el_main: any = document.getElementById('el_main')
        const myChart = echarts.init(el_main);
        echarts.registerMap('china', mapAreaList)
        const option = {
          backgroundColor: 'rgb(121, 145, 209)',
          geo: {
            map: 'china',
            aspectScale: 0.75, //地图宽比
            zoom: 1.1,
            itemStyle: {
              normal: {
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#09132c', // 0%处颜色
                    },
                    {
                      offset: 1,
                      color: '#274d68', // 100%处颜色
                    },
                  ],
                  globalCoord: true
                },
                shadowColor: 'rgb(58, 115, 192)',
                shadowOffsetX: 7,
                shadowOffsetY: 8,
              }
            },
            regions: [{
              name: '南海诸岛',
              itemStyle: {
                opacity: 0.5
              }
            }]
          },
          series: [
            {
              type: 'map',
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#1de9b6',
                    fontSize: '.4rem'
                  }
                },
                emphasis: {
                  textStyle: {
                    color: 'rgb(183, 185, 14)'
                  }
                }
              },
              zoom: 1.1,
              map: 'china',
              itemStyle: {
                normal: {
                  backgroundColor: 'rgb(147, 235, 248)',
                  borderWidth: 1,
                  areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgb(31,54,150)', // 0%处颜色
                      },
                      {
                        offset: 1,
                        color: 'rgb(89,128,142)', // 100%处颜色
                      },
                    ],
                    globalCoord: true
                  }
                },
                emphasis: {
                  areaColor: 'rgb(46, 229, 206)',
                  borderWidth: 0.1
                }
              }
            },
            {
              type: 'effectScatter', // 散点图
              coordinateSystem: 'geo',
              showEffectOn: 'render',
              symbolSize: 5, // 散点大小
              zlevel: 1,
              data: data.points,
              rippleEffect: { // 联谊特效相关配置
                period: 15,
                scale: 4,
                brushType: 'fill'
              }
            },
            {
              type: 'lines', // 线路图
              zlevel: 2,
              effect: {
                show: true,
                period: 4,
                symbol: 'arrow',
                symbolSize: 5,
                trailLength: 0.4
              },
              lineStyle: {
                normal: {
                  color: '#1de9b6',
                  width: 1,
                  opacity: 0.1,
                  curveness: 0.3
                }
              },
              data: data.linesData
            }
          ]
        }
        myChart.setOption(option)
      })
    })
    return {
      ...toRefs(data)
    }
  }
});
</script>

<style scoped lang="scss">
#el_main {
  margin-top: 50px;
  width: 100%;
  height: 550px;
}
</style>