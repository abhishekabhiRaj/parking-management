import Fuse from 'fuse.js'

const fuseSearch = (data,filterText,type) => {
  if (data && filterText.length > 0) {
    var searchColumns = []
    if (data && data.length > 0) {
      searchColumns = Object.keys(data[0]);
      if(type == 'okr'){
        searchColumns.push('SVC_Model_OKR_Entity_Link_Keyresult_List.Keyresult');
        searchColumns.push('SVC_Model_OKR_Entity_Link_Keyresult_List.Keyresult_Measurement_Unit');
      }
      const fuse = new Fuse(data, {
        keys: searchColumns,
        includeScore: true,
        includeMatches: true,
        useExtendedSearch: false,
        threshold: 0.6
      })
      return fuse.search(filterText).map(i=>i.item);
    }
  }
  return data;
};

export default fuseSearch